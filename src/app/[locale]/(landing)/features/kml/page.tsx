// app/[locale]/(landing)/features/kml/page.tsx
"use client";

import Image from "next/image";
import { Upload, Palette, Download, CheckCircle } from "lucide-react";
import FeatureDetail from "@/components/FeatureDetail";
import { useI18n } from "@/locales/client";

export default function KMLPage() {
  const t = useI18n();

  const leftItems = [
    { title: t("landing.kml.features.item1.title"), desc: t("landing.kml.features.item1.desc"), icon: <Upload className="w-5 h-5" /> },
    { title: t("landing.kml.features.item2.title"), desc: t("landing.kml.features.item2.desc"), icon: <Palette className="w-5 h-5" /> },
    { title: t("landing.kml.features.item3.title"), desc: t("landing.kml.features.item3.desc"), icon: <Download className="w-5 h-5" /> },
  ];

  const bullets = [
    t("landing.kml.key_features.item1"),
    t("landing.kml.key_features.item2"),
    t("landing.kml.key_features.item3"),
  ];

  return (
    <FeatureDetail
      title={t("landing.kml.title")}
      subtitle={t("landing.kml.subtitle")}
      features={[]} // requis par le type
      cta={{ text: t("landing.kml.cta"), href: "/auth/sign-up?feature=kml" }}
    >
      {/* Texte à gauche / image à droite */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          {leftItems.map((f, i) => (
            <div key={i} className="flex">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white font-semibold">
                {i + 1}
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                  {f.icon} {f.title}
                </h3>
                <p className="mt-1 text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image agrandie */}
        <div className="flex md:justify-end">
          <div className="relative w-full md:max-w-[680px] lg:max-w-[760px] h-[260px] md:h-[360px] lg:h-[420px] rounded-xl border bg-white shadow overflow-hidden">
            <Image
              src="/features/kml-form.png"
              alt={t("landing.kml.title")}
              fill
              className="object-contain"
              sizes="(min-width:1280px) 760px, (min-width:1024px) 680px, 100vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Détails */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">{t("landing.kml.key_features.title")}</h3>
          <ul className="space-y-3">
            {bullets.map((txt, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>{txt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{t("landing.kml.use_cases.title")}</h3>
          <h4 className="font-medium mb-2">{t("landing.kml.use_cases.business.title")}</h4>
          <p>{t("landing.kml.use_cases.business.desc")}</p>
          <h4 className="font-medium mt-4 mb-2">{t("landing.kml.use_cases.public.title")}</h4>
          <p>{t("landing.kml.use_cases.public.desc")}</p>
        </div>
      </div>
    </FeatureDetail>
  );
}
