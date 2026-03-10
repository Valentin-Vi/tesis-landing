'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '../i18n/translations';
import { ContactForm } from './ContactForm';
import { VideoSection } from './VideoSection';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ImageSectionDoubleContent } from './AboutMeSection';

export function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation(language);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111]">
      {mounted && <LanguageSwitcher />}

      <section className="relative w-full lg:h-[90vh] sm:h-[38vh] flex items-center justify-center overflow-hidden bg-black">
        <video
          src="/resources/videos/hackathon-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute bg-linear-to-b from-transparent to-[#111111] bottom-0 left-0 right-0 h-[10px]" />

        <div className="relative z-10 text-center text-shadow-lg text-shadow-black/35 text-[#c7e320] px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t.heroHeadline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t.heroSubheadline}
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 text-shadow-none py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            {t.heroCta}
          </a>
        </div>
      </section>

      {/* Who Am I */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mt-6 text-[#c7e320] py-8">{t.introduction.title}</h2>
        <ImageSectionDoubleContent
          imageSrc='/resources/images/pfp2.jpeg'
          imageAlt="Picture of me"
          whoAmI={t.introduction.whoAmI}
          whatIsThis={t.introduction.whatIsThis}
          imagePosition='left'
        />
      </section>


      {/* What I've Built */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">        
        <h2 className="text-5xl font-bold text-center text-[#c7e320]">{t.whatIveBuilt.title}</h2>
        
        {/* Project 1 */}
        <VideoSection
          videoSrc="/resources/videos/scale-ai-process.mp4"
          title={t.aiThatSeesTitle}
          description={t.aiThatSeesDesc}
          imagePosition="right"
        />

        {/* Project 2 */}
        <VideoSection
          videoSrc="/resources/videos/scale-team.webm"
          title={t.slowProcessTitle}
          description={t.slowProcessDesc}
          imagePosition="left"
        />

        <div className="absolute w-full bg-linear-to-b from-transparent to-[#111111] bottom-0 left-0 right-0 h-[15px]" />
      </section>

      {/* What I Can Do */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#c7e320]">{t.whatICanDo}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg">
              <div className='flex flex-row gap-4 text-left items-center'>
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-[#c7e320] mb-3">{t.bringAiTitle}</h3>
              </div>
              <p className="text-gray-100">{t.bringAiDesc}</p>
            </div>

            <div className="p-8 rounded-lg">
              <div className='flex flex-row gap-4 text-left items-center'>
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-[#c7e320] mb-3">{t.messyDataTitle}</h3>
              </div>
              <p className="text-gray-100">{t.messyDataDesc}</p>
            </div>
            
            <div className="p-8 rounded-lg">
              <div className='flex flex-row gap-4 text-left items-center'>
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-[#c7e320] mb-3">{t.fixProcessTitle}</h3>
              </div>
              <p className="text-gray-100">{t.fixProcessDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-8xl font-bold text-[#c7e320] mb-4">{t.letsTalk}</h2>
          <p className="text-lg text-gray-100">
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
