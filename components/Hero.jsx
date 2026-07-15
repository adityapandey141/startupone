'use client';

import { MapPin, Star, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionWrap, FadeUp, ButtonMotion } from './MotionWrap';
import IndiaMap from './IndiaMap';

const stats = [
  { value: '₹100Cr+', label: 'Funds Raised' },
  { value: '5,000+', label: 'Happy Clients' },
  { value: '70%', label: 'Approval Rate' },
];

const trustLabels = [
  { icon: Shield, text: 'RBI Compliant Partners' },
  { icon: CheckCircle, text: 'No Hidden Fees' },
  { icon: TrendingUp, text: '10+ Years Experience' },
];

const popularServices = [
  { label: 'Business Loan', href: '/services/business-loan' },
  { label: 'MSME Funding', href: '/services/msme-funding' },
  { label: 'Startup Seed Fund', href: '/services/startup-seed-fund' },
  { label: 'CGTMSE Loan', href: '/services/cgtmse' },
  { label: 'Venture Capital', href: '/services/venture-capital' },
  { label: 'PMEGP Scheme', href: '/services/pmegp' },
  { label: 'Working Capital', href: '/services/working-capital' },
];

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-12 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <SectionWrap className="space-y-6">
            {/* Trust badge pills */}
            <FadeUp className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-200">
                <Shield className="w-3.5 h-3.5" /> Trusted
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200">
                <MapPin className="w-3.5 h-3.5" /> Pan India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700 text-xs font-medium border border-yellow-200">
                <Star className="w-3.5 h-3.5" /> 5.0 · Google Reviews
              </span>
            </FadeUp>

            {/* Heading */}
            <FadeUp custom={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                India&apos;s Most Trusted Business Funding Partner for{' '}
                <span className="gradient-text">Growth</span>
              </h1>
            </FadeUp>

            {/* Subtext */}
            <FadeUp custom={2}>
              <p className="text-lg text-gray-600 max-w-lg">
                We connect entrepreneurs with the right funding solutions — from seed capital to large-scale business loans — with expert guidance at every step.
              </p>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp custom={3} className="flex flex-wrap gap-3">
              <a href="/contact">
                <ButtonMotion className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg">
                  Get Funding Fast <ArrowRight className="w-4 h-4" />
                </ButtonMotion>
              </a>
              <a href="/services">
                <ButtonMotion className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 hover:border-primary-300 text-gray-700 font-semibold bg-white">
                  Explore Services
                </ButtonMotion>
              </a>
            </FadeUp>

            {/* Trust micro-labels */}
            <FadeUp custom={4} className="flex flex-wrap gap-4 pt-2">
              {trustLabels.map((item) => (
                <span key={item.text} className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                  <item.icon className="w-4 h-4 text-primary-500" />
                  {item.text}
                </span>
              ))}
            </FadeUp>

            {/* Stat cards */}
            <FadeUp custom={5} className="grid grid-cols-3 gap-3 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 text-center"
                >
                  <div className="text-2xl font-extrabold text-primary-700">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </FadeUp>
          </SectionWrap>

          {/* Right Column - India Map */}
          <div className="relative hidden lg:block min-h-[540px]">
            <IndiaMap />
          </div>
        </div>

        {/* Popular services pill row */}
        <FadeUp custom={6} className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 rounded bg-accent-red text-white text-[10px] font-bold uppercase tracking-wider">
              Popular
            </span>
            {popularServices.map((service) => (
              <a
                key={service.label}
                href={service.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors shadow-sm"
              >
                {service.label}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
