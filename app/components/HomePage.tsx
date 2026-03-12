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
    <div className="min-h-screen w-full overflow-x-hidden bg-[#090a12]">
      {mounted && <LanguageSwitcher />}

      <section className="relative w-full h-[70vh] lg:h-[60vh] mt-20 py-20 lg:py-12 flex items-center justify-center overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          src="/resources/videos/hero.webm"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 text-center text-shadow-lg text-shadow-black/35 text-[#3c93ea] px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-6 leading-tight font-serif">
            {t.heroHeadline}
          </h1>
          <p className="text-3xl md:text-2xl mb-8 font-serif text-[#e4eef5]">
            {t.heroSubheadline}
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 text-shadow-none py-3 rounded-lg font-serif hover:bg-gray-200 transition"
          >
            {t.heroCta}
          </a>
        </div>
      </section>

      {/* Who Am I */}
      <section className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-center font-serif font-semibold mt-6 text-[#3c93ea] py-8">{t.introduction.title}</h2>
        <ImageSectionDoubleContent
          imageSrc='/resources/images/pfp.jpeg'
          imageAlt="Picture of me"
          whoAmI={t.introduction.whoAmI}
          whatIsThis={t.introduction.whatIsThis}
          imagePosition='left'
        />
      </section>


      {/* What I've Built */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">        
        <h2 className="text-5xl text-center font-serif text-[#3c93ea]">{t.whatIveBuilt.title}</h2>
        
        {/* Project 1 */}
        <VideoSection
          videoSrc="/resources/videos/microfauna.webm"
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
      </section>

      {/* What I Can Do */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-center font-serif mb-16 text-[#3c93ea]">{t.whatICanDo}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg">
              <div className='flex flex-row gap-4 text-left items-center'>
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-serif text-[#3c93ea] mb-3">{t.bringAiTitle}</h3>
              </div>
              <p className="text-[#e4eef5]">{t.bringAiDesc}</p>
            </div>

            <div className="p-8 rounded-lg">
              <div className='flex flex-row gap-4 text-left items-center'>
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-serif text-[#3c93ea] mb-3">{t.messyDataTitle}</h3>
              </div>
              <p className="text-[#e4eef5]">{t.messyDataDesc}</p>
            </div>
            
            <div className="p-8 rounded-lg">
              <div className='flex flex-row gap-4 text-left items-center'>
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-serif text-[#3c93ea] mb-3">{t.fixProcessTitle}</h3>
              </div>
              <p className="text-[#e4eef5]">{t.fixProcessDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif lg:text-5xl text-[#3c93ea] mb-4">{t.letsTalk}</h2>
          <p className="text-lg text-[#e4eef5]">
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
