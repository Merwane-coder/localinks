// app/[locale]/(landing)/features/visibilite/page.tsx
"use client";


import Image from "next/image";
import { useI18n } from "@/locales/client";



export default function VisibilityPage() {
  const t = useI18n();

  const step2Items = [
    t("landing.visibility.how.step2.item1"),
    t("landing.visibility.how.step2.item2"),
    t("landing.visibility.how.step2.item3"),
    t("landing.visibility.how.step2.item4"),
  ];

  const advantages = [
    {
      title: t("landing.visibility.advantages.card1.title"),
      desc: t("landing.visibility.advantages.card1.desc"),
    },
    {
      title: t("landing.visibility.advantages.card2.title"),
      desc: t("landing.visibility.advantages.card2.desc"),
    },
    {
      title: t("landing.visibility.advantages.card3.title"),
      desc: t("landing.visibility.advantages.card3.desc"),
    },
  ];

  const faqs = [
    {
      q: t("landing.visibility.faq.q1.question"),
      a: t("landing.visibility.faq.q1.answer"),
    },
    {
      q: t("landing.visibility.faq.q2.question"),
      a: t("landing.visibility.faq.q2.answer"),
    },
    {
      q: t("landing.visibility.faq.q3.question"),
      a: t("landing.visibility.faq.q3.answer"),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Colonne texte */}
            <div className="md:w-7/12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("landing.visibility.hero.title_leading")}{" "}
                <span className="text-blue-600">
                  {t("landing.visibility.hero.title_highlight")}
                </span>{" "}
                {t("landing.visibility.hero.title_trailing")}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t("landing.visibility.hero.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/demo"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  {t("landing.visibility.hero.cta_demo")}
                </a>
                <a
                  href="/tarifs"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium"
                >
                  {t("landing.visibility.hero.cta_pricing")}
                </a>
              </div>
            </div>

            {/* Colonne image */}
            <div className="md:w-5/12 w-full md:max-w-[540px] xl:max-w-[600px] md:ml-auto">
              <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white p-3">
                <Image
                  src="/features/online-visibility.png"
                  alt={t("landing.visibility.hero.image_alt")}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[60vh] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("landing.visibility.how.title_leading")}{" "}
            <span className="text-blue-600">
              {t("landing.visibility.how.title_highlight")}
            </span>
          </h2>

          <div className="space-y-12">
            {/* Étape 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("landing.visibility.how.step1.title")}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  {t("landing.visibility.how.step1.text")}
                </p>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("landing.visibility.how.step2.title")}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  {t("landing.visibility.how.step2.lead")}
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-4">
                  {step2Items.map((txt, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{txt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("landing.visibility.how.step3.title")}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  {t("landing.visibility.how.step3.text")}
                </p>
                <div className="rounded-lg overflow-hidden border border-gray-200 bg-white p-3 md:max-w-[520px]">
                  <Image
                    src="/features/online-visibility.png"
                    alt={t("landing.visibility.how.step3.image_alt")}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[50vh] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("landing.visibility.advantages.title_leading")}{" "}
            <span className="text-blue-600">
              {t("landing.visibility.advantages.title_highlight")}
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((a, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  {i === 0 && "🌐"}{i === 1 && "🧭"}{i === 2 && "📍"} {a.title}
                </h3>
                <p className="text-gray-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <blockquote className="text-xl md:text-2xl font-medium mb-8">
            {t("landing.visibility.testimonial.quote",)}
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mr-4">
              <Image
                src="/testimonials/real-estate.jpg"
                alt={t("landing.visibility.testimonial.image_alt")}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-bold">
                {t("landing.visibility.testimonial.author_name")}
              </div>
              <div className="text-blue-100">
                {t("landing.visibility.testimonial.author_role")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("landing.visibility.faq.title_leading")}{" "}
            <span className="text-blue-600">
              {t("landing.visibility.faq.title_highlight")}
            </span>
          </h2>

          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {f.q}
                </h3>
                <p className="text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
