// app/[locale]/(landing)/features/clients/page.tsx
"use client";


import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, FileText, Bell } from "lucide-react";
import { useI18n } from "@/locales/client";


export default function ClientsPage() {
  const t = useI18n();

  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      title: t("landing.clients.features.item1.title"),
      description: t("landing.clients.features.item1.desc"),
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: t("landing.clients.features.item2.title"),
      description: t("landing.clients.features.item2.desc"),
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: t("landing.clients.features.item3.title"),
      description: t("landing.clients.features.item3.desc"),
    },
  ];

  const integrations = [
    t("landing.clients.integrations.items.crm"),
    t("landing.clients.integrations.items.outlook"),
    t("landing.clients.integrations.items.google_contacts"),
    t("landing.clients.integrations.items.mailchimp"),
    t("landing.clients.integrations.items.zapier"),
  ];

  return (
    <main className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t("landing.clients.title")}
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          {t("landing.clients.subtitle")}
        </p>
      </div>

      {/* disposition sans grid arbitraire : légère priorité à l'image */}
      <div className="md:flex md:items-center md:gap-12">
        {/* Colonne texte ~49% */}
        <div className="md:basis-[49%]">
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {i + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild>
              <Link href="/auth/sign-up?feature=clients">
                {t("landing.clients.cta")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Colonne image ~51% (léger élargissement) */}
        <div className="mt-10 md:mt-0 md:basis-[51%]">
          <div className="relative w-full h-[22rem] md:h-[24rem] lg:h-[26rem] rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white">
            <Image
              src="/features/clients-management.png"
              alt={t("landing.clients.image_alt")}
              fill
              sizes="(min-width:1024px) 680px, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-4">
          {t("landing.clients.integrations.title")}
        </h3>
        <div className="flex flex-wrap gap-3">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">
            {/* on laisse l’emoji dans le rendu */}
            📊 {t("landing.clients.stats.title")}
          </h4>
          <p>{t("landing.clients.stats.desc")}</p>
        </div>
      </div>
    </main>
  );
}
