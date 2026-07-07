'use client';

import { Shield, Award, FileCheck } from 'lucide-react';
import { FadeUp } from './MotionWrap';

const features = [
  { icon: Shield, text: 'Tax Exemption Benefits' },
  { icon: Award, text: 'IPR Fast-Track' },
  { icon: FileCheck, text: 'Self-Certification Compliance' },
];

export default function DPIITBanner() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="bg-gradient-to-r from-navy-900 via-gray-800 to-navy-900 rounded-2xl p-8 sm:p-10">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider border border-white/20">
              DPIIT Recognition
            </span>
            <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white">
              Get DPIIT Recognition for Your Startup
            </h3>
            <p className="mt-2 text-gray-300 max-w-xl mx-auto text-sm">
              Unlock exclusive government benefits with official DPIIT startup recognition. We handle the complete process.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              {features.map((feat) => (
                <div
                  key={feat.text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20"
                >
                  <feat.icon className="w-4 h-4 text-primary-300" />
                  <span className="text-sm text-white font-medium">{feat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
