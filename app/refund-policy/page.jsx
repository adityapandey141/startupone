export const metadata = {
  title: 'Refund Policy — Startup Support Advisory',
  description: 'Refund and Cancellation Policy for Startup Support Advisory services.',
};

export default function RefundPolicyPage() {
  return (
    <main className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Refund & Cancellation Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2024</p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Overview</h2>
            <p className="text-gray-600">
              At Startup Support Advisory, we are committed to providing high-quality funding advisory services. This Refund & Cancellation Policy outlines the terms under which refunds may be issued.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Free Consultation</h2>
            <p className="text-gray-600">
              Our initial consultation and eligibility assessment is completely free. No charges apply until you formally engage our services and agree to the fee structure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Service Fee Structure</h2>
            <p className="text-gray-600 mb-3">Our fees typically consist of:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Processing Fee:</strong> Charged upfront for documentation preparation and application processing</li>
              <li><strong>Success Fee:</strong> Charged only upon successful funding approval and disbursement</li>
              <li><strong>Registration Fee:</strong> For services like DPIIT, Udyam, or other government registrations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Refund Eligibility</h2>
            <div className="bg-green-50 rounded-xl p-5 mb-4">
              <h3 className="font-bold text-green-800 mb-2">Full Refund Applicable:</h3>
              <ul className="list-disc pl-6 space-y-1 text-green-700 text-sm">
                <li>If we are unable to commence work within 15 days of payment</li>
                <li>If you cancel within 48 hours of payment and no work has started</li>
                <li>If there is a duplicate payment</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-xl p-5 mb-4">
              <h3 className="font-bold text-yellow-800 mb-2">Partial Refund (50%) Applicable:</h3>
              <ul className="list-disc pl-6 space-y-1 text-yellow-700 text-sm">
                <li>If you cancel after work has commenced but before application submission</li>
                <li>If we determine during processing that you do not meet eligibility criteria</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-2">No Refund Applicable:</h3>
              <ul className="list-disc pl-6 space-y-1 text-red-700 text-sm">
                <li>After application has been submitted to the financial institution</li>
                <li>If the application is rejected due to client providing incorrect information</li>
                <li>Success fees (only charged on approval, hence non-refundable)</li>
                <li>Government registration fees (DPIIT, Udyam, etc.) as these are paid to government</li>
                <li>If client becomes unresponsive for more than 30 days during processing</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Refund Process</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Submit a refund request via email to info@startupsupport.in</li>
              <li>Include your name, phone number, payment receipt, and reason for refund</li>
              <li>Our team will review the request within 3-5 business days</li>
              <li>If approved, refund will be processed within 7-10 business days</li>
              <li>Refund will be credited to the original payment method</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Cancellation by Us</h2>
            <p className="text-gray-600">
              We reserve the right to cancel our engagement if we discover that a client has provided false or misleading information, engaged in fraudulent activities, or violated our Terms of Service. In such cases, no refund will be issued.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Force Majeure</h2>
            <p className="text-gray-600">
              In case of delays or inability to provide services due to circumstances beyond our control (natural disasters, government policy changes, pandemic, etc.), we will work with clients to reschedule services or provide appropriate credit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Disputes</h2>
            <p className="text-gray-600">
              If you are dissatisfied with our refund decision, you may escalate the matter by writing to our grievance officer. We aim to resolve all disputes amicably within 15 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Contact for Refund Requests</h2>
            <div className="mt-3 bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
              <p><strong>Startup Support Advisory</strong></p>
              <p>123 Business Hub, SG Highway, Ahmedabad, Gujarat 380015</p>
              <p>Email: info@startupsupport.in</p>
              <p>Phone: +91 98765 43210</p>
              <p className="mt-2 text-xs text-gray-500">Refund requests must be sent to the email above with subject line: &quot;Refund Request - [Your Name]&quot;</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
