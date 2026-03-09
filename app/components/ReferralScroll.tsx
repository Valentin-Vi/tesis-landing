'use client';

import { useEffect, useRef } from 'react';

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
    <div className="w-full overflow-hidden bg-white py-8">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth px-4"
      >
        {duplicatedReferrals.map((referral, index) => (
          <div
            key={`${referral.id}-${index}`}
            className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-3 mb-4">
              {referral.image ? (
                <img
                  src={referral.image}
                  alt={referral.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                  {referral.name.charAt(0)}
                </div>
              )}
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{referral.name}</p>
                <p className="text-sm text-gray-600">{referral.role}</p>
                <p className="text-xs text-gray-500">{referral.company}</p>
              </div>
            </div>

            <div className="mb-3">
              <span className="text-yellow-400 text-lg">★★★★★</span>
            </div>

            <p className="text-gray-700 text-sm italic leading-relaxed">
              "{referral.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
