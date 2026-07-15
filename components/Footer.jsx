'use client';

import { MessageCircle, Phone, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];
const serviceLinks = [
  { label: 'Business Loan', href: '/services/business-loan' },
  { label: 'MSME Funding', href: '/services/msme-funding' },
  { label: 'Startup Seed Fund', href: '/services/startup-seed-fund' },
  { label: 'CGTMSE', href: '/services/cgtmse' },
  { label: 'PMEGP', href: '/services/pmegp' },
  { label: 'DPIIT Registration', href: '/services/dpiit-registration' },
];
const resourceLinks = [
  { label: 'Working Capital', href: '/services/working-capital' },
  { label: 'Venture Capital', href: '/services/venture-capital' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-navy-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="font-bold text-xl text-white">
                  Startup<span className="text-primary-400"> Support</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 max-w-sm">
                India&apos;s most trusted business funding consultancy. Helping entrepreneurs access the right capital through expert guidance and government schemes. Startup Support Advisory — your growth partner.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span>123 Business Hub, SG Highway, Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span>info@startupsupport.in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4">Our Services</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="font-bold text-white mb-4">More</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xs text-gray-500">
              <strong className="text-gray-400">Disclaimer:</strong> Startup Support Advisory is a funding consultancy and advisory service. We do not directly provide loans or financial products. All funding is subject to eligibility criteria set by respective banks, NBFCs, and government agencies. Results may vary based on individual profiles and market conditions.
            </p>
          </div>

          {/* Social icons */}
          <div className="mt-8 flex items-center gap-4">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">© 2024 Startup Support Advisory. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:+919876543210"
          className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </a>
      </div>
    </>
  );
}
