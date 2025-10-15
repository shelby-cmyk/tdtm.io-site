import { motion } from "motion/react";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#00D9FF]" />
              </div>
              <div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
                  Privacy Policy
                </h1>
                <p className="text-gray-400" style={{ fontWeight: 300 }}>
                  Last updated: October 14, 2025
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-gray-300" style={{ fontWeight: 300, lineHeight: '1.8' }}>
                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Introduction
                  </h2>
                  <p>
                    Talk Data to Me ("TDTM," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including our identity resolution pixel, data infrastructure, and managed services.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Information We Collect
                  </h2>
                  <h3 className="text-white mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    Personal Information
                  </h3>
                  <p className="mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Name, email address, phone number, and company information</li>
                    <li>Account credentials and profile information</li>
                    <li>Communication preferences and marketing consent</li>
                    <li>Payment and billing information</li>
                  </ul>

                  <h3 className="text-white mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    Automatically Collected Information
                  </h3>
                  <p className="mb-4">
                    When you visit our website or use our services, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address, browser type, and device information</li>
                    <li>Cookie data and unique identifiers</li>
                    <li>Usage data, including pages viewed and interactions</li>
                    <li>Geolocation data (with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    How We Use Your Information
                  </h2>
                  <p className="mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide, operate, and maintain our services</li>
                    <li>To improve, personalize, and expand our services</li>
                    <li>To understand and analyze how you use our services</li>
                    <li>To develop new products, services, and features</li>
                    <li>To communicate with you about updates, offers, and promotions</li>
                    <li>To process transactions and send related information</li>
                    <li>To provide customer support and respond to inquiries</li>
                    <li>To detect, prevent, and address technical issues and fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Identity Resolution Services
                  </h2>
                  <p className="mb-4">
                    Our TDTM pixel and identity resolution services collect and process data to identify website visitors and match them to our identity database. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Browser fingerprinting and device identification</li>
                    <li>Cross-device tracking and identity matching</li>
                    <li>Behavioral and intent signal collection</li>
                    <li>Integration with third-party platforms and data sources</li>
                  </ul>
                  <p>
                    All identity resolution activities are conducted in compliance with applicable privacy laws and regulations, including GDPR and CCPA.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Data Sharing and Disclosure
                  </h2>
                  <p className="mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                    <li><strong>Business Partners:</strong> With partners who provide complementary services</li>
                    <li><strong>Clients:</strong> When you are identified through our pixel on a client's website</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Data Security
                  </h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Access controls and authentication requirements</li>
                    <li>SOC 2 Type II certification and compliance</li>
                  </ul>
                  <p>
                    However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Your Rights and Choices
                  </h2>
                  <p className="mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access, update, or delete your personal information</li>
                    <li>Object to or restrict processing of your data</li>
                    <li>Data portability and the right to receive your data</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Opt-out of targeted advertising and tracking</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="mb-4">
                    We use cookies, pixels, and similar tracking technologies to collect and store information. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Children's Privacy
                  </h2>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    International Data Transfers
                  </h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Contact Us
                  </h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <p><strong>Talk Data to Me</strong></p>
                    <p>Email: privacy@tdtm.io</p>
                    <p>Website: www.tdtm.io</p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
