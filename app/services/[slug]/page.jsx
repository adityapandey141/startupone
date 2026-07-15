import { services, getServiceBySlug } from '@/lib/services-data';
import { ArrowRight, CheckCircle, Phone, Banknote, Building2, Rocket, Shield, Landmark, FileCheck, Wallet, TrendingUp } from 'lucide-react';
import { notFound } from 'next/navigation';

const iconMap = { Banknote, Building2, Rocket, Shield, Landmark, FileCheck, Wallet, TrendingUp };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Startup Support Advisory`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const Icon = iconMap[service.iconName];

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <a href="/services" className="inline-flex items-center gap-1 text-sm text-primary-600 font-medium mb-4 hover:underline">
              ← Back to Services
            </a>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                {Icon && <Icon className="w-6 h-6 text-primary-600" />}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{service.title}</h1>
            </div>
            <p className="text-lg text-gray-600">{service.heroDesc}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg transition-colors">
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-semibold bg-white hover:border-primary-300 transition-colors">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="space-y-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                {service.eligibility.map((e) => (
                  <div key={e} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.process.map((p) => (
              <div key={p.step} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-primary-700">{p.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to Apply for {service.title}?</h2>
            <p className="text-primary-100 mb-6">Our experts will guide you through every step of the process.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary-700 font-semibold shadow-lg hover:shadow-xl transition-all">
                Get Started <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => {
              const SIcon = iconMap[s.iconName];
              return (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all"
                >
                  {SIcon && <SIcon className="w-8 h-8 text-primary-600 mb-2" />}
                  <h3 className="font-bold text-gray-900 text-sm">{s.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{s.shortDesc}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
