'use client';

import { CheckCircle, Lightbulb } from 'lucide-react';
import { SectionWrap, FadeUp, CardMotion } from './MotionWrap';

const eligibilityCriteria = [
  { label: 'Business Vintage', value: '6+ months' },
  { label: 'Annual Turnover', value: '₹12L+' },
  { label: 'Credit Score (CIBIL)', value: '650+' },
  { label: 'Business Registration', value: 'Required' },
  { label: 'GST Registration', value: 'Preferred' },
  { label: 'ITR Filed', value: 'Last 2 years' },
];

const documents = [
  'PAN Card (Business & Personal)',
  'Aadhaar Card',
  'Business Registration Certificate',
  'GST Certificate',
  'Bank Statements (12 months)',
  'ITR (Last 2 years)',
  'Business Plan / Project Report',
  'Address Proof',
];

export default function Eligibility() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap>
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider">
              Eligibility & Documents
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Check If You Qualify
            </h2>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Eligibility card */}
            <CardMotion className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Common eligibility criteria</h3>
              <div className="space-y-3">
                {eligibilityCriteria.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardMotion>

            {/* Documents card */}
            <CardMotion custom={1} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Documents you&apos;ll typically need</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{doc}</span>
                  </div>
                ))}
              </div>
            </CardMotion>
          </div>

          {/* Tip box */}
          <FadeUp custom={2} className="mt-6">
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-amber-800">Pro Tip</p>
                <p className="text-sm text-amber-700 mt-1">
                  Having all documents ready before applying can speed up your approval by up to 60%. Our team helps you prepare a complete application package.
                </p>
              </div>
            </div>
          </FadeUp>
        </SectionWrap>
      </div>
    </section>
  );
}
