import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { validateSessionToken } from '@/actions/auth';
import { parse } from 'cookie';

// Limites mises à jour + ajout des zones de chalandise (maxServiceAreas)
const PLAN_LIMITS = {
  FREE: {
    maxClients: 3,
    maxPointsPerMap: 1000,
    maxRoutesPerMap: 5,
    maxServiceAreas: 10,          // ✅ zones de chalandise
    supportType: 'none',
  },
  PRO: {
    maxClients: 10,
    maxPointsPerMap: 10_000,
    maxRoutesPerMap: 20,
    maxServiceAreas: 20,          // ✅ zones de chalandise
    supportType: 'email',
  },
  PREMIUM: {
    maxClients: 50,
    maxPointsPerMap: Number.MAX_SAFE_INTEGER, // "illimité"
    maxRoutesPerMap: 100,
    maxServiceAreas: 70,          // ✅ zones de chalandise
    supportType: 'email+chat',
  },
} as const;

export async function GET(request: NextRequest) {
  try {
    const cookiesHeader = request.headers.get('cookie');
    if (!cookiesHeader) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const cookies = parse(cookiesHeader);
    const token = cookies.session;
    if (!token) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const sessionResult = await validateSessionToken(token);
    if (!sessionResult.user?.id) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = sessionResult.user.id;

    // On récupère l'utilisateur avec l'abo Stripe (si tu utilises la table subscriptions)
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: {
          where: {
            status: 'ACTIVE',
            currentPeriodEnd: { gt: new Date() },
          },
          orderBy: { currentPeriodEnd: 'desc' },
          take: 1,
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    // 1) Priorité à la subscription ACTIVE (Stripe)
    // 2) Sinon, fallback sur user.subscriptionLevel
    let plan: 'FREE' | 'PRO' | 'PREMIUM' = 'FREE';
    if (user.subscriptions.length > 0) {
      plan = user.subscriptions[0].planType as 'FREE' | 'PRO' | 'PREMIUM';
    } else if (user.subscriptionLevel === 'PRO' || user.subscriptionLevel === 'PREMIUM') {
      plan = user.subscriptionLevel as 'PRO' | 'PREMIUM';
    }

    const limits = PLAN_LIMITS[plan] ?? PLAN_LIMITS.FREE;

    // (info pour l'UI) nombre de clients déjà créés
    const currentClientCount = await prisma.client.count({ where: { userId } }).catch(() => 0);

    // On renvoie le plan et toutes les limites à plat (comme ton implémentation d’origine)
    return NextResponse.json({
      plan,
      ...limits,
      currentClientCount,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
  }
}
