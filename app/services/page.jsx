import { services } from '@/lib/services-data';
import { ArrowRight, Banknote, Building2, Rocket, Shield, Landmark, FileCheck, Wallet, TrendingUp } from 'lucide-react';

const iconMap = { Banknote, Building2, Rocket, Shield, Landmark, FileCheck, Wallet, TrendingUp };

export const metadata = {
  title: 'Our Services — Startup Support Advisory',
  description: 'Explore our comprehensive business funding services including Business Loans, MSME Funding, Startup Seed Fund, CGTMSE, PMEGP, and more.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-4">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Comprehensive Funding<br /><span className="text-primary-600">Solutions</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From government schemes to private capital, we cover every funding avenue to help your business grow.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-primary-600" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service is Right for You?</h2>
          <p className="text-primary-100 mb-8">Our experts will analyze your business and recommend the best funding options.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary-700 font-semibold shadow-lg hover:shadow-xl transition-all">
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
