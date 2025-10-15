import { motion } from "motion/react";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function TermsOfService() {
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
                <FileText className="w-8 h-8 text-[#00D9FF]" />
              </div>
              <div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
                  Terms of Service
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
                    Agreement to Terms
                  </h2>
                  <p>
                    These Terms of Service ("Terms") govern your access to and use of the Talk Data to Me ("TDTM") website, platform, and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Services Description
                  </h2>
                  <p className="mb-4">
                    TDTM provides the following services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Identity Resolution Pixel:</strong> Real-time website visitor identification with 50% match rates</li>
                    <li><strong>Data Infrastructure:</strong> Data enrichment, activation, and orchestration services</li>
                    <li><strong>Managed Services:</strong> Full-service campaign execution and optimization</li>
                    <li><strong>Product Ecosystem:</strong> Suite of integrated marketing and data products</li>
                    <li><strong>Platform Integrations:</strong> Connections to 100+ third-party platforms</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Account Registration
                  </h2>
                  <p className="mb-4">
                    To access certain features of our services, you must register for an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Not share your account or credentials with others</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Acceptable Use
                  </h2>
                  <p className="mb-4">
                    You agree not to use our services to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any laws, regulations, or third-party rights</li>
                    <li>Transmit harmful, fraudulent, or deceptive content</li>
                    <li>Interfere with or disrupt our services or servers</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Collect or harvest data from our services without permission</li>
                    <li>Use our services for competitive intelligence or benchmarking</li>
                    <li>Reverse engineer or attempt to extract our source code</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Data and Privacy
                  </h2>
                  <p className="mb-4">
                    By using our services, you acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>You have obtained necessary consents for data collection and processing</li>
                    <li>You comply with all applicable privacy laws and regulations</li>
                    <li>You have reviewed and agree to our Privacy Policy</li>
                    <li>TDTM may collect, process, and share data as described in our Privacy Policy</li>
                  </ul>
                  <p>
                    You are responsible for ensuring your use of TDTM services complies with GDPR, CCPA, and other applicable privacy regulations.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Intellectual Property
                  </h2>
                  <p className="mb-4">
                    TDTM retains all rights, title, and interest in:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Our platform, software, and technology</li>
                    <li>Our trademarks, logos, and brand assets</li>
                    <li>Our proprietary algorithms and methodologies</li>
                    <li>Our content, documentation, and materials</li>
                  </ul>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable license to use our services in accordance with these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Payment Terms
                  </h2>
                  <p className="mb-4">
                    For paid services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fees are specified in your service agreement or order form</li>
                    <li>Payment is due according to the agreed-upon schedule</li>
                    <li>All fees are non-refundable unless otherwise specified</li>
                    <li>We may suspend services for non-payment</li>
                    <li>Prices may change with 30 days' notice</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Service Level and Availability
                  </h2>
                  <p className="mb-4">
                    While we strive to maintain high availability:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We do not guarantee uninterrupted or error-free service</li>
                    <li>Scheduled maintenance may require temporary downtime</li>
                    <li>Service levels may be specified in enterprise agreements</li>
                    <li>We reserve the right to modify or discontinue services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Limitation of Liability
                  </h2>
                  <p className="mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>TDTM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND</li>
                    <li>WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES</li>
                    <li>OUR TOTAL LIABILITY SHALL NOT EXCEED FEES PAID IN THE PRIOR 12 MONTHS</li>
                    <li>WE ARE NOT RESPONSIBLE FOR THIRD-PARTY SERVICES OR INTEGRATIONS</li>
                  </ul>
                  <p>
                    Some jurisdictions do not allow certain liability exclusions, so some limitations may not apply to you.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Indemnification
                  </h2>
                  <p>
                    You agree to indemnify and hold TDTM harmless from any claims, damages, losses, or expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Termination
                  </h2>
                  <p className="mb-4">
                    We may terminate or suspend your access to our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>For violation of these Terms</li>
                    <li>For non-payment of fees</li>
                    <li>For fraudulent or illegal activity</li>
                    <li>At our discretion with or without notice</li>
                  </ul>
                  <p>
                    Upon termination, your right to use our services immediately ceases. Provisions that by their nature should survive termination will continue in effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Dispute Resolution
                  </h2>
                  <p className="mb-4">
                    Any disputes arising from these Terms or our services shall be:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Governed by the laws of [Your Jurisdiction]</li>
                    <li>Resolved through binding arbitration</li>
                    <li>Subject to individual (not class action) proceedings</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Changes to Terms
                  </h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify you of material changes by email or through our services. Your continued use of our services after changes constitute acceptance of the modified Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-white mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Contact Information
                  </h2>
                  <p className="mb-4">
                    For questions about these Terms, please contact us:
                  </p>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <p><strong>Talk Data to Me</strong></p>
                    <p>Email: legal@tdtm.io</p>
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
