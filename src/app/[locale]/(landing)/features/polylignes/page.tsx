// app/[locale]/(landing)/features/polylignes/page.tsx
"use client";


import Image from "next/image";
import { useI18n } from "@/locales/client";


export default function PolylignesPage() {
  const t = useI18n();

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">
                  {t("landing.polylines.hero.title_leading")}
                </span>{" "}
                {t("landing.polylines.hero.title_trailing")}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t("landing.polylines.hero.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  {t("landing.polylines.hero.cta_demo")}
                </a>
                <a
                  href="/pricing"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium"
                >
                  {t("landing.polylines.hero.cta_pricing")}
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative aspect-video rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white">
                <Image
                  src="/features/polylines-illustration.svg"
                  alt={t("landing.polylines.hero.image_alt")}
                  fill
                  className="object-contain"
                  sizes="(min-width:1024px) 640px, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("landing.polylines.how.title")}
          </h2>

          <div className="space-y-12">
            {/* Étape 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("landing.polylines.how.step1.title")}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  {t("landing.polylines.how.step1.text")}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                    {("landing.polylines.how.step1.code_example")}
                  </pre>
                </div>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("landing.polylines.how.step2.title")}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  {t("landing.polylines.how.step2.lead")}
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{t("landing.polylines.how.step2.item1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{t("landing.polylines.how.step2.item2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{t("landing.polylines.how.step2.item3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{t("landing.polylines.how.step2.item4")}</span>
                  </li>
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
                  {t("landing.polylines.how.step3.title")}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  {t("landing.polylines.how.step3.text")}
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 bg-white">
                  <Image
                    src="/features/polylines-illustration.svg"
                    alt={t("landing.polylines.how.step3.image_alt")}
                    fill
                    className="object-contain"
                    sizes="(min-width:1024px) 640px, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("landing.polylines.advantages.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("landing.polylines.advantages.card1.title")}
              </h3>
              <p className="text-gray-600">
                {t("landing.polylines.advantages.card1.description")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("landing.polylines.advantages.card2.title")}
              </h3>
              <p className="text-gray-600">
                {t("landing.polylines.advantages.card2.description")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("landing.polylines.advantages.card3.title")}
              </h3>
              <p className="text-gray-600">
                {t("landing.polylines.advantages.card3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <blockquote className="text-xl md:text-2xl font-medium mb-8">
            {t("landing.polylines.testimonial.quote")}
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mr-4 bg-white/10" />
            <div>
              <div className="font-bold">
                {t("landing.polylines.testimonial.author_name")}
              </div>
              <div className="text-blue-100">
                {t("landing.polylines.testimonial.author_role")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("landing.polylines.faq.title")}
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("landing.polylines.faq.q1.question")}
              </h3>
              <p className="text-gray-600">
                {t("landing.polylines.faq.q1.answer")}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("landing.polylines.faq.q2.question")}
              </h3>
              <p className="text-gray-600">
                {t("landing.polylines.faq.q2.answer", )}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t("landing.polylines.faq.q3.question")}
              </h3>
              <p className="text-gray-600">
                {t("landing.polylines.faq.q3.answer")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
