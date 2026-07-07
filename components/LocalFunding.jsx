'use client';

import { ArrowRight, Building2, Banknote } from 'lucide-react';
import { SectionWrap, FadeUp, ButtonMotion, CardMotion } from './MotionWrap';

export default function LocalFunding() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap>
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Business Loan in <span className="text-primary-600">Your City</span>
            </h2>
          </FadeUp>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat cards */}
            <FadeUp custom={1} className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <div className="text-3xl font-extrabold text-primary-700">₹50L+</div>
              <p className="text-sm text-gray-600 mt-1">Average loan amount processed</p>
            </FadeUp>
            <FadeUp custom={2} className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="text-3xl font-extrabold text-green-700">48 hrs</div>
              <p className="text-sm text-gray-600 mt-1">Fast-track approval timeline</p>
            </FadeUp>

            {/* CTA + Link */}
            <FadeUp custom={3} className="flex flex-col justify-center gap-3">
              <ButtonMotion className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-600 text-white font-semibold shadow-md w-fit">
                Apply Now <ArrowRight className="w-4 h-4" />
              </ButtonMotion>
              <a href="#services" className="text-sm text-primary-600 font-medium hover:underline">
                View all funding options →
              </a>
            </FadeUp>

            {/* Preview cards */}
            <FadeUp custom={4} className="space-y-3">
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Term Loan</p>
                  <p className="text-xs text-gray-500">Up to ₹5Cr</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Banknote className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Working Capital</p>
                  <p className="text-xs text-gray-500">Flexible limits</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </SectionWrap>
      </div>
    </section>
  );
}
