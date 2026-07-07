'use client';

import { Send } from 'lucide-react';
import { FadeUp, ButtonMotion } from './MotionWrap';

export default function Newsletter() {
  return (
    <section className="py-10 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Stay Updated on Funding Opportunities</h3>
            <p className="text-primary-100 text-sm mt-1">Get weekly insights on schemes, tips, and success stories.</p>
          </div>
          <div className="flex w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-64 px-4 py-3 rounded-l-xl border-0 outline-none text-sm"
            />
            <ButtonMotion className="px-5 py-3 rounded-r-xl bg-navy-900 text-white font-semibold flex items-center gap-2 text-sm">
              Subscribe <Send className="w-4 h-4" />
            </ButtonMotion>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
