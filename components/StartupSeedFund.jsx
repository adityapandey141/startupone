'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';
import { SectionWrap, FadeUp, CardMotion, ButtonMotion } from './MotionWrap';

const processSteps = [
  { number: '1', title: 'DPIIT Registration', desc: 'Register your startup on the Startup India portal' },
  { number: '2', title: 'Apply to Incubator', desc: 'Get associated with an approved incubator' },
  { number: '3', title: 'Submit Application', desc: 'Complete the Seed Fund application process' },
  { number: '4', title: 'Receive Funding', desc: 'Get up to ₹20L as seed capital' },
];

const checklist = [
  'DPIIT recognized startup',
  'Less than 2 years old',
  'Innovative product / service',
  'Scalable business model',
];

export default function StartupSeedFund() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap>
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider">
              Startup India
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Startup India Seed Fund Scheme
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Get up to ₹20 Lakhs in seed funding for your innovative startup through the Government of India initiative.
            </p>
          </FadeUp>

          {/* Process steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {processSteps.map((step, i) => (
              <CardMotion key={step.number} custom={i} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-purple-700">{step.number}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{step.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
              </CardMotion>
            ))}
          </div>

          {/* Dark CTA card */}
          <FadeUp custom={4}>
            <div className="bg-gradient-to-r from-navy-900 to-gray-800 rounded-2xl p-8 sm:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Talk to a funding specialist
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    Our experts will guide you through the entire Startup India Seed Fund application process.
                  </p>
                  <ButtonMotion className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg">
                    Book Free Call <ArrowRight className="w-4 h-4" />
                  </ButtonMotion>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {checklist.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </SectionWrap>
      </div>
    </section>
  );
}
