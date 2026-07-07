'use client';

import { CheckCircle, Users, Clock, Shield, Headphones, TrendingUp, Award } from 'lucide-react';
import { SectionWrap, FadeUp } from './MotionWrap';

const reasons = [
  { icon: Shield, title: 'Government Authorized', desc: 'Registered consultancy with direct lender relationships' },
  { icon: Clock, title: 'Fast Processing', desc: 'Average 7-day turnaround from application to approval' },
  { icon: Users, title: '5,000+ Clients Served', desc: 'Trusted by entrepreneurs across 28+ states' },
  { icon: TrendingUp, title: 'High Approval Rate', desc: '70% success rate — well above industry average' },
  { icon: Award, title: 'Best-in-Class Advisory', desc: 'Expert guidance on scheme selection and documentation' },
  { icon: Headphones, title: '24/7 Support', desc: 'Dedicated relationship manager for every client' },
];

const extraTrust = [
  '100% transparent fee structure',
  'No processing until approval',
  'Money-back guarantee on select services',
  'Verified Google 5-star rating',
];

export default function SixReasons() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap>
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Six Reasons to Choose Us
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Why thousands of Indian entrepreneurs trust us with their funding journey.
            </p>
          </FadeUp>

          {/* 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <FadeUp key={reason.title} custom={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{reason.title}</h4>
                  <p className="text-sm text-gray-600 mt-0.5">{reason.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Extra trust rows */}
          <FadeUp custom={6} className="mt-8 grid sm:grid-cols-2 gap-3">
            {extraTrust.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </FadeUp>
        </SectionWrap>
      </div>
    </section>
  );
}
