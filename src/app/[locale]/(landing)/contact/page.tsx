import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact | Localink",
  description: "Contactez l’équipe Localink par e-mail.",
};

const EMAIL = "contact@starboost.me";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Contact
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Une question, un partenariat ou un projet&nbsp;? Écrivez-nous, on vous répond au plus vite.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Email */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Mail className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">E-mail</h2>
              </div>
              <p className="mt-3 text-gray-600">
                Réponse sous 24h ouvrées (CET).
              </p>
              <div className="mt-4">
                <Link
                  href={`mailto:${EMAIL}`}
                  className="text-blue-600 hover:text-blue-700 font-medium break-all"
                >
                  {EMAIL}
                </Link>
              </div>
              <div className="mt-6">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href={`mailto:${EMAIL}`}>Envoyer un e-mail</Link>
                </Button>
              </div>
            </div>

            {/* Optionnel : Zone d’intervention */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900"></h2>
              </div>
              <p className="mt-3 text-gray-600">
                France et Europe. Rendez-vous en visio ou sur site selon projet.
              </p>
            </div>
          </div>

          {/* CTA bas de page */}
          <div className="mt-10">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href={`mailto:${EMAIL}`}>Nous écrire</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
