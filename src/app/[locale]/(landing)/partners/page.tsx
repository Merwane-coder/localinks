import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/layout/FAQSection";
import {
  Target,
  Layers,
  Route,
  MapPin,
  BarChart2,
  Sparkles,
  CheckCircle2,
  ClipboardCheck
} from "lucide-react";

export const metadata = {
  title: "Partenaires & Études de cas | Localink",
  description:
    "Découvrez comment nos partenaires améliorent leur visibilité locale avec Localink : approche, livrables et impacts observés.",
};

// ⚠️ Utilise les fichiers que tu as déjà en /public/partners/
const PARTNERS = [
  { name: "G La Dalle", img: "/partners/logo-GLaDalle.webp" },
  { name: "CT",         img: "/partners/logo-CT.svg" },
];

const CASES = [
  {
    name: "G La Dalle",
    logo: "/partners/logo-GLaDalle.webp",
    goal:
      "Couvrir proprement les zones de chalandise autour des restaurants et renforcer la présence sur Google Maps.",
    approach: [
      "Audit des zones prioritaires (rayons, quartiers, axes routiers)",
      "Génération KML : points réalistes + itinéraires crédibles",
      "Déploiement progressif pour un signal naturel"
    ],
    deliverables: [
      "Pack KML multi-couches (points / itinéraires / polylignes)",
      "Plan de déploiement par vague",
      "Check-list d’optimisation My Business"
    ],
    observations: [
      "Couverture cartographique plus cohérente autour des points de vente",
      "Meilleure visibilité sur les requêtes locales pertinentes",
      "Signal de présence perçu comme plus ‘naturel’"
    ]
  },
  {
    name: "CT",
    logo: "/partners/logo-CT.svg",
    goal:
      "Densifier la présence multi-sites et harmoniser la couverture locale par ville/quartier.",
    approach: [
      "Cartographie des zones à fort potentiel",
      "Plan KML multi-couches (positions, itinéraires, polylignes)",
      "Itérations hebdomadaires sur la base des retours terrain"
    ],
    deliverables: [
      "KML par site + couches communes",
      "Tableau de suivi des publications",
      "Guide interne d’activation locale"
    ],
    observations: [
      "Présence plus homogène entre sites d’une même zone",
      "Meilleure pertinence perçue sur Maps",
      "Processus d’activation simplifié pour les équipes"
    ]
  }
];

export default function PartnersShowcasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Ils améliorent leur visibilité locale avec <span className="text-blue-600">Localink</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Études de cas sans chiffres confidentiels : notre méthode, les livrables fournis
              et les impacts observés sur le terrain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/pricing">Essayer Localink</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Parler à un expert</Link>
              </Button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              * Les marques citées restent la propriété de leurs détenteurs. Nous ne publions pas de données sensibles ;
              un audit ou des métriques peuvent être partagés en privé sur demande.
            </p>
          </div>
        </div>
      </section>

      {/* Logos – ils nous font confiance */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Ils nous font confiance</h2>
          <div className="grid grid-cols-2 gap-6 items-center">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="relative h-24 sm:h-28 w-full rounded-2xl border border-gray-200 bg-white shadow-sm p-4 overflow-hidden flex items-center justify-center"
                title={p.name}
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Études de cas (qualitatives) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Études de cas</h2>
          <p className="mt-2 text-gray-600 text-center">
            Objectifs, approche, livrables et impacts observés.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {CASES.map((c) => (
              <div key={c.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-20">
                    <Image src={c.logo} alt={c.name} fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold">{c.name}</h3>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-600" /> Objectif
                  </div>
                  <p className="mt-1 text-gray-600">{c.goal}</p>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" /> Approche
                  </div>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    {c.approach.map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <ClipboardCheck className="w-4 h-4 text-blue-600" /> Livrables fournis
                  </div>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    {c.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-blue-600" /> Impacts observés
                  </div>
                  <ul className="mt-1 space-y-1 text-gray-600">
                    {c.observations.map((o, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-500 text-center">
            Besoin de chiffres ? Nous partageons des métriques en privé (audit gratuit) selon le secteur et les objectifs.
          </p>
        </div>
      </section>

      {/* Notre méthode */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Notre méthode</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { icon: <MapPin className="w-5 h-5" />,   t: "Audit local", d: "Analyse des zones, concurrence et couverture actuelle." },
              { icon: <Layers className="w-5 h-5" />,   t: "Plan KML",     d: "Design de couches : points, polylignes et itinéraires crédibles." },
              { icon: <Route className="w-5 h-5" />,    t: "Déploiement",  d: "Publication progressive pour un signal naturel." },
              { icon: <BarChart2 className="w-5 h-5" />,t: "Mesure",       d: "Suivi qualitatif + métriques privées sur demande." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">{s.t}</h3>
                <p className="mt-1 text-gray-600 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Notre expertise</h2>
          <p className="mt-2 text-gray-600 text-center">
            Optimisation cartographique, génération KML à grande échelle et méthodologie “safe-by-design”.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: "Positions réalistes", d: "Génération de points crédibles sur vos zones cibles." },
              { t: "Itinéraires & polylignes", d: "Réseaux plausibles qui renforcent la présence locale." },
              { t: "Approche progressive", d: "Déploiement étalé pour éviter les signaux brusques." },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900">{b.t}</h3>
                <p className="mt-1 text-gray-600 text-sm">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Demander un audit gratuit</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
}
