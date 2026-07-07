'use client';

import { Rocket, Building2, Leaf, ArrowRight } from 'lucide-react';
import { SectionWrap, FadeUp, CardMotion } from './MotionWrap';

const categories = [
  {
    icon: Rocket,
    accentColor: 'bg-purple-500',
    title: 'Startup',
    description: 'From ideation to Series A — seed funding, angel investment, venture capital, and government startup schemes.',
    link: 'Learn more',
  },
  {
    icon: Building2,
    accentColor: 'bg-blue-500',
    title: 'MSME',
    description: 'Working capital, term loans, machinery finance, and government-backed MSME schemes to grow your enterprise.',
    link: 'Learn more',
  },
  {
    icon: Leaf,
    accentColor: 'bg-green-500',
    title: 'Agri & Rural',
    description: 'Agriculture loans, rural enterprise funding, food processing grants, and kisan credit facilities.',
    link: 'Learn more',
  },
];

export default function FundingLifecycle() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap>
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Funding & Advisory Lifecycle
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Tailored solutions for every business category and growth stage.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <CardMotion key={cat.title} custom={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
                {/* Color accent bar */}
                <div className={`h-1.5 ${cat.accentColor}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                    <cat.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cat.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 flex-1">{cat.description}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                    {cat.link} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </CardMotion>
            ))}
          </div>
        </SectionWrap>
      </div>
    </section>
  );
}
