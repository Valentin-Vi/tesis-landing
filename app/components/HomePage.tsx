'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '../i18n/translations';
import { ContactForm } from './ContactForm';
import { VideoSection } from './VideoSection';
import { TestimonialCarousel } from './TestimonialCarousel';
import { LanguageSwitcher } from './LanguageSwitcher';

export function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation(language);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {mounted && <LanguageSwitcher />}

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          src="/resources/videos/hero-3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t.heroHeadline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t.heroSubheadline}
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {t.heroCta}
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 mb-3">{t.recognizedBy}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
                  <p className="font-semibold text-gray-900">Platanus Build Night</p>
                  <p className="text-xs text-gray-600">{t.contender}</p>
                </div>
                <div className="text-2xl text-gray-400">+</div>
                <div className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
                  <p className="font-semibold text-gray-900">Anthropic</p>
                  <p className="text-xs text-gray-600">{t.sponsored}</p>
                </div>
                <div className="text-2xl text-gray-400">+</div>
                <div className="px-4 py-2 bg-white border border-gray-300 rounded-lg">
                  <p className="font-semibold text-gray-900">Tiendanube</p>
                  <p className="text-xs text-gray-600">{t.hosted}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I've Built */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">{t.whatIveBuilt}</h2>

        {/* Project 1 */}
        <VideoSection
          videoSrc="/resources/videos/scale-ai-process.mp4"
          title={t.aiThatSeesTitle}
          description={t.aiThatSeesDesc}
          imagePosition="left"
        />

        {/* Project 2 */}
        <VideoSection
          videoSrc="/resources/videos/scale-ai-process.mp4"
          title={t.slowProcessTitle}
          description={t.slowProcessDesc}
          imagePosition="right"
        />

        {/* Project 3 */}
        <VideoSection
          videoSrc="/resources/videos/hospital-platform.mp4"
          title={t.completeSystemTitle}
          description={t.completeSystemDesc}
          imagePosition="left"
        />
      </section>

      {/* What I Can Do */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t.whatICanDo}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.bringAiTitle}</h3>
              <p className="text-gray-600">{t.bringAiDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.messyDataTitle}</h3>
              <p className="text-gray-600">{t.messyDataDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.fixProcessTitle}</h3>
              <p className="text-gray-600">{t.fixProcessDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t.whyMe}</h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <p className="font-semibold text-gray-900">{t.realCompanies}</p>
              <p className="text-gray-600">{t.realCompaniesDesc}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <p className="font-semibold text-gray-900">{t.recognized}</p>
              <p className="text-gray-600">{t.recognizedDesc}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <p className="font-semibold text-gray-900">{t.buildThings}</p>
              <p className="text-gray-600">{t.buildThingsDesc}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">✓</div>
            <div>
              <p className="font-semibold text-gray-900">{t.workUntilWorks}</p>
              <p className="text-gray-600">{t.workUntilWorksDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t.whatOthersSay}</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.letsTalk}</h2>
          <p className="text-lg text-gray-600">
            {t.letsTalkDesc}
          </p>
        </div>

        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            {t.footerLocation}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {t.footerContact}
          </p>
        </div>
      </footer>
    </div>
  );
}
