import { Users, Target, Award, TrendingUp, CheckCircle, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About Us — Startup Support Advisory',
  description: 'Learn about Startup Support Advisory — India\'s trusted business funding consultancy helping entrepreneurs access the right capital.',
};

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Empowering Indian entrepreneurs with access to the right funding at the right time.' },
  { icon: Users, title: 'Client-First', desc: 'Every client receives personalized guidance tailored to their unique business needs.' },
  { icon: Award, title: 'Excellence', desc: 'We maintain the highest standards in documentation, compliance, and service delivery.' },
  { icon: TrendingUp, title: 'Growth-Focused', desc: 'Our success is measured by the growth and success of our clients\' businesses.' },
];

const milestones = [
  { year: '2014', event: 'Founded in Ahmedabad with a vision to simplify business funding' },
  { year: '2016', event: 'Expanded services to cover all major government schemes' },
  { year: '2018', event: 'Crossed 1,000+ successful funding approvals' },
  { year: '2020', event: 'Pan-India operations across 28+ states' },
  { year: '2022', event: '₹100Cr+ total funds facilitated for clients' },
  { year: '2024', event: '5,000+ happy clients and growing' },
];

const team = [
  { name: 'Rajesh Patel', role: 'Founder & CEO', desc: '15+ years in business consulting and finance' },
  { name: 'Priya Sharma', role: 'Head of Operations', desc: 'Expert in government scheme documentation' },
  { name: 'Amit Desai', role: 'Senior Advisor', desc: 'Specialized in MSME and startup funding' },
  { name: 'Neha Gupta', role: 'Client Relations', desc: 'Ensuring seamless client experience' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-4">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Your Trusted Partner in<br /><span className="text-primary-600">Business Growth</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Startup Support Advisory is India&apos;s leading business funding consultancy, dedicated to connecting entrepreneurs with the right capital solutions through expert guidance and government schemes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2014 in Ahmedabad, Startup Support Advisory was born from a simple observation — Indian entrepreneurs struggle to navigate the complex landscape of business funding, government schemes, and financial documentation.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder saw countless promising businesses fail not due to lack of ideas or effort, but because they couldn&apos;t access the capital they needed. We set out to bridge this gap.
              </p>
              <p className="text-gray-600">
                Today, we&apos;ve helped over 5,000 businesses across India secure funding through various channels — from government schemes like PMEGP and CGTMSE to private venture capital and bank loans.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-primary-700">₹100Cr+</div>
                <div className="text-sm text-gray-600 mt-1">Funds Facilitated</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-green-700">5,000+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="bg-yellow-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-yellow-700">28+</div>
                <div className="text-sm text-gray-600 mt-1">States Covered</div>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-red-700">70%</div>
                <div className="text-sm text-gray-600 mt-1">Approval Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <v.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-700">{m.year}</span>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 font-medium">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900">{t.name}</h3>
                <p className="text-sm text-primary-600 font-medium">{t.role}</p>
                <p className="text-xs text-gray-500 mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Let us help you find the perfect funding solution for your business.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg transition-colors">
            Contact Us Today <CheckCircle className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
