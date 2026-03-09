'use client';

import { useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '../i18n/translations';

export function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { language } = useLanguage();
  const t = getTranslation(language);

  const testimonials = [
    {
      name: t.testimonial1Name,
      role: t.testimonial1Role,
      company: t.testimonial1Company,
      quote: t.testimonial1Quote,
    },
    {
      name: t.testimonial2Name,
      role: t.testimonial2Role,
      company: t.testimonial2Company,
      quote: t.testimonial2Quote,
    },
    {
      name: t.testimonial3Name,
      role: t.testimonial3Role,
      company: t.testimonial3Company,
      quote: t.testimonial3Quote,
    },
    {
      name: t.testimonial4Name,
      role: t.testimonial4Role,
      company: t.testimonial4Company,
      quote: t.testimonial4Quote,
    },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });

      setTimeout(checkScroll, 500);
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg p-6 snap-start hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 justify-center mt-6">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
