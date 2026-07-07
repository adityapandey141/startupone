'use client';

import { FileText, Users, TrendingUp, ShieldCheck, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
import { SectionWrap, FadeUp, CardMotion, ButtonMotion } from './MotionWrap';

const cards = [
  {
    icon: FileText,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    tag: 'Documentation',
    title: 'Complete Application Support',
    description: 'End-to-end documentation and application preparation with error-free filing.',
    checklist: ['Project report drafting', 'Financial projection', 'Document compilation'],
  },
  {
    icon: Users,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    tag: 'Advisory',
    title: 'Dedicated Funding Advisor',
    description: 'A personal advisor who understands your business and funding landscape.',
    checklist: ['1-on-1 consultation', 'Scheme recommendations', 'Application tracking'],
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    tag: 'Growth',
    title: 'Business Growth Strategy',
    description: 'Strategic guidance beyond funding to help your business scale sustainably.',
    checklist: ['Market analysis', 'Growth roadmap', 'Revenue optimization'],
  },
  {
    icon: ShieldCheck,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    tag: 'Compliance',
    title: 'Regulatory Compliance',
    description: 'Stay compliant with all government and banking regulations effortlessly.',
    checklist: ['GST compliance', 'MSME registration', 'License assistance'],
  },
  {
    icon: Headphones,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    tag: 'Support',
    title: 'Post-Disbursement Support',
    description: 'Continued support even after your funding is approved and disbursed.',
    checklist: ['EMI planning', 'Renewal assistance', 'Account management'],
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrap>
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider">
              Our Value
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
              What You Get With Us
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <CardMotion key={card.title} custom={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col relative overflow-hidden">
                {/* Corner tag */}
                <span className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-gray-100 text-[10px] font-semibold text-gray-500 uppercase">
                  {card.tag}
                </span>
                <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                  <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{card.description}</p>
                <div className="mt-4 space-y-2 flex-1">
                  {card.checklist.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <ButtonMotion className="mt-5 inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold hover:bg-primary-100 transition-colors w-fit">
                  Get started <ArrowRight className="w-3.5 h-3.5" />
                </ButtonMotion>
              </CardMotion>
            ))}
          </div>
        </SectionWrap>
      </div>
    </section>
  );
}
