'use client';

import { ArrowRight } from 'lucide-react';
import { FadeUp, ButtonMotion } from './MotionWrap';

export default function GradientCTA() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center gradient-blue-red">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Not sure which funding fits you?
            </h2>
            <p className="mt-3 text-white/80 max-w-lg mx-auto">
              Let our experts analyze your business and recommend the best funding path — completely free.
            </p>
            <div className="mt-6">
              <ButtonMotion className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary-700 font-bold shadow-xl hover:shadow-2xl">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </ButtonMotion>
            </div>
          </div>
          {/* Decorative blurs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        </FadeUp>
      </div>
    </section>
  );
}
