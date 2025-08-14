// app/features/positions/page.tsx
"use client";


import Image from "next/image";
import { MapPin, Route, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/locales/client";



export default function PositionsPage() {
  const t = useI18n();

  const features = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t("landing.positions.features.item1.title"),
      desc: t("landing.positions.features.item1.desc"),
    },
    {
      icon: <Route className="w-5 h-5" />,
      title: t("landing.positions.features.item2.title"),
      desc: t("landing.positions.features.item2.desc"),
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: t("landing.positions.features.item3.title"),
      desc: t("landing.positions.features.item3.desc"),
    },
  ];

  const useCases = [
    {
      title: t("landing.positions.use_cases.logistics.title"),
      desc: t("landing.positions.use_cases.logistics.desc"),
    },
    {
      title: t("landing.positions.use_cases.field_services.title"),
      desc: t("landing.positions.use_cases.field_services.desc"),
    },
    {
      title: t("landing.positions.use_cases.sales_networks.title"),
      desc: t("landing.positions.use_cases.sales_networks.desc"),
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Titre */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t("landing.positions.title")}
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          {t("landing.positions.subtitle")}
        </p>
      </div>

      {/* Bloc 2 colonnes */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Colonne gauche : features + CTA */}
        <div>
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {i + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                    {f.icon} {f.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild>
              <a href="/auth/sign-up?feature=positions">
                {t("landing.positions.cta")}
              </a>
            </Button>
          </div>
        </div>

        {/* Colonne droite : image recadrée (hauteur réduite) */}
        <div
          className={[
            "relative w-full rounded-lg shadow-lg overflow-hidden",
            "border border-gray-200 bg-white",
            "h-[260px] sm:h-[300px] lg:h-[360px]",
          ].join(" ")}
        >
          {/* ⚠️ Vérifie que le fichier existe : public/features/positions-routes.png */}
          <Image
            src="/features/positions-routes.png"
            alt={t("landing.positions.image_alt")}
            fill
            className="object-cover"
            style={{ objectPosition: "center 48%" }}
            sizes="(min-width: 1024px) 680px, 100vw"
            priority
          />
        </div>
      </div>

      {/* Applications typiques */}
      <section className="mt-16">
        <h3 className="text-xl font-semibold mb-4">
          {t("landing.positions.use_cases.title")}
        </h3>
        <div className="space-y-4">
          {useCases.map((item, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
