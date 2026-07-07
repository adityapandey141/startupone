'use client';

import { TrendingUp, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionWrap, FadeUp, CardMotion } from './MotionWrap';

const fundingCards = [
  {
    icon: TrendingUp,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Venture Capital & PE',
    tags: ['Series A-C', 'Growth Stage', 'Equity'],
    description: 'Connect with top VCs and private equity firms for high-growth startups looking to scale rapidly across India and beyond.',
  },
  {
    icon: Building,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'MSME Term & Working Capital',
    tags: ['Term Loan', 'OD/CC', 'Invoice Discounting'],
    description: 'Comprehensive funding solutions for established MSMEs needing capital for expansion, inventory, or day-to-day operations.',
  },
  {
    icon: ShieldCheck,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'CGTMSE Unsecured Loans',
    tags: ['No Collateral', 'Govt Backed', 'Up to ₹5Cr'],
    description: 'Leverage the Credit Guarantee Scheme for collateral-free business loans backed by the Government of India.',
  },
];

export default function FundingTypes() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap className="text-center mb-12">
          <FadeUp>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider">
              Funding Solutions
            </span>
          </FadeUp>
          <FadeUp custom={1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Types of Business Funding
            </h2>
          </FadeUp>
          <FadeUp custom={2}>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re a startup, MSME, or growing enterprise — we have the right funding path for your business stage.
            </p>
          </FadeUp>
        </SectionWrap>

        <div className="grid md:grid-cols-3 gap-6">
          {fundingCards.map((card, i) => (
            <CardMotion
              key={card.title}
              custom={i}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {card.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 flex-1">{card.description}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                Talk to an expert <ArrowRight className="w-4 h-4" />
              </a>
            </CardMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
