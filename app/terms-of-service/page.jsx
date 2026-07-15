export const metadata = {
  title: 'Terms of Service — Startup Support Advisory',
  description: 'Terms and Conditions for using Startup Support Advisory services.',
};

export default function TermsPage() {
  return (
    <main className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2024</p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing or using the services provided by Startup Support Advisory (&quot;Company&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Services Description</h2>
            <p className="text-gray-600 mb-3">
              Startup Support Advisory is a business funding consultancy that provides:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Advisory and consultation services for business funding</li>
              <li>Assistance with documentation and application preparation</li>
              <li>Facilitation between clients and financial institutions</li>
              <li>Guidance on government funding schemes and programs</li>
              <li>DPIIT and Udyam registration assistance</li>
            </ul>
            <p className="text-gray-600 mt-3">
              <strong>Important:</strong> We are an advisory service and do NOT directly provide loans, grants, or financial products. All funding decisions are made by respective banks, NBFCs, and government agencies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. No Guarantee of Results</h2>
            <p className="text-gray-600">
              While we strive to maximize approval chances, we cannot guarantee that any funding application will be approved. Funding decisions are solely at the discretion of lending institutions and government bodies. Past success rates are not indicative of future results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide accurate and truthful information in all documents</li>
              <li>Disclose all relevant financial information and liabilities</li>
              <li>Respond promptly to requests for additional information</li>
              <li>Not submit any forged, falsified, or misleading documents</li>
              <li>Pay agreed-upon fees for services rendered</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Fees and Payment</h2>
            <p className="text-gray-600 mb-3">
              Our fee structure will be clearly communicated before engagement:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Initial consultation is free of charge</li>
              <li>Service fees are disclosed upfront before work begins</li>
              <li>Processing fees are non-refundable once services commence</li>
              <li>Success-based fees apply only upon successful funding approval</li>
              <li>All fees are exclusive of applicable taxes (GST)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Intellectual Property</h2>
            <p className="text-gray-600">
              All content on our website including text, graphics, logos, and software is the property of Startup Support Advisory and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Startup Support Advisory shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to loss of profits, business interruption, or funding application rejection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Confidentiality</h2>
            <p className="text-gray-600">
              We treat all client information as confidential. Your financial and business data will only be shared with relevant financial institutions for the purpose of processing your funding applications, and only with your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Termination</h2>
            <p className="text-gray-600">
              Either party may terminate the engagement with written notice. In case of termination, fees for services already rendered are payable. Any refund of advance fees will be governed by our Refund Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">10. Governing Law</h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">11. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">12. Contact</h2>
            <p className="text-gray-600">
              For questions about these Terms of Service:
            </p>
            <div className="mt-3 bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
              <p><strong>Startup Support Advisory</strong></p>
              <p>123 Business Hub, SG Highway, Ahmedabad, Gujarat 380015</p>
              <p>Email: info@startupsupport.in</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
