'use client';

import { useEffect, useRef } from 'react';
import Image from "next/image"

export interface Referral {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

interface ReferralScrollProps {
  referrals: Referral[];
  autoScrollSpeed?: number; // milliseconds between scroll movements
}

export function ReferralScroll({ referrals, autoScrollSpeed = 50 }: ReferralScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      container.scrollLeft += 2;
      // Reset to start when reaching near the end
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, autoScrollSpeed);
    return () => clearInterval(interval);
  }, [autoScrollSpeed]);

  // Duplicate referrals for seamless infinite scroll
  const duplicatedReferrals = [...referrals, ...referrals];

  return (
    <div className="w-full overflow-hidden bg-[#111111] py-4">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth px-4"
      >
        {duplicatedReferrals.map((referral, index) => (
          <div
            key={`${referral.id}-${index}`}
            className="flex-shrink-0 w-80 rounded-lg border border-[#c7e320] px-6 py-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-3 mb-4">
              {referral.image ? (
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#c7e320] flex items-center justify-center text-gray-600 font-bold">
                  <Image
                    src="/resources/images/scale_logo.jpg"
                    alt="Company: Scale AI"
                    title="Scale AI"
                    width={50}
                    height={50}
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full text-[#c7e320] flex items-center justify-center font-bold">
                  {referral.name.charAt(0)}
                </div>
              )}
              <div className="flex-1">
                <p className="font-semibold text-[#c7e320]">{referral.name}</p>
                <p className="text-sm text-[#c7e320]">{referral.role}</p>
                <p className="text-xs text-[#c7e320]">{referral.company}</p>
              </div>
            </div>

            <p className="text-[#c7e320] text-sm italic leading-relaxed">
              "{referral.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
