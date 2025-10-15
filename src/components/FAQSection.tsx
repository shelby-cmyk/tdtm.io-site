import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is the TDTM identity resolution pixel?",
    answer: "The TDTM pixel is a lightweight JavaScript snippet that identifies website visitors in real-time with a 50% match rate. It connects anonymous traffic to our 500M+ identity records, enabling you to activate unknown visitors across email, paid media, and CRM platforms."
  },
  {
    question: "How does the 50% match rate compare to industry standards?",
    answer: "A 50% match rate is exceptional in the B2B identity space. Most solutions deliver 5-15% match rates. Our proprietary technology and continuously updated identity graph enable significantly higher identification rates, giving you 3-5x more actionable visitor data."
  },
  {
    question: "What platforms does TDTM integrate with?",
    answer: "TDTM integrates with 100+ platforms including Klaviyo, Google Ads, Meta, GoHighLevel, HubSpot, Salesforce, Freshsales, Zoho, Mailchimp, and Beehiiv. We offer native integrations, API access, and custom integrations for enterprise clients."
  },
  {
    question: "How long does implementation take?",
    answer: "Most clients are live in under 48 hours. The TDTM pixel installation takes minutes, and our team handles all integration setup, data mapping, and campaign configuration. Enterprise implementations with custom requirements typically take 1-2 weeks."
  },
  {
    question: "Can agencies white label the TDTM pixel?",
    answer: "Yes! The TDTM identity resolution pixel is available for white labeling to agencies. You can offer best-in-class visitor identification to your clients under your own brand, with full support from our team."
  },
  {
    question: "What is the custom audience builder?",
    answer: "Our audience builder lets you create highly targeted segments using our entire data ecosystem—identity data, behavioral signals, intent data, and firmographic filters. Export audiences directly to any connected platform for immediate campaign activation."
  },
  {
    question: "Do you offer managed services?",
    answer: "Yes. TDTM offers full-service campaign management including strategy, execution, optimization, and reporting. Our team acts as an extension of yours, handling everything from media buying to data activation to creative development."
  },
  {
    question: "What makes TDTM different from other marketing platforms?",
    answer: "TDTM is a complete business entity combining managed services, data infrastructure, and an 8-product ecosystem. Unlike point solutions, we provide end-to-end capabilities from visitor identification to campaign execution to performance measurement—all powered by a self-improving data core."
  },
  {
    question: "How is data privacy and security handled?",
    answer: "We're SOC 2 Type II certified and fully GDPR compliant. All data is encrypted in transit and at rest, with strict access controls and regular security audits. We're also a certified LiveRamp partner, ensuring industry-leading data governance standards."
  },
  {
    question: "What pricing models do you offer?",
    answer: "We offer flexible pricing based on your needs—from self-serve pixel access to fully managed services. Pricing is typically based on traffic volume, match volume, or campaign budget. Contact us for a custom quote tailored to your specific requirements."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 bg-gradient-to-b from-black via-[#8B5CF6]/5 to-black relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 mb-6">
            <span className="text-sm text-[#8B5CF6]" style={{ fontWeight: 600 }}>FREQUENTLY ASKED</span>
          </div>
          <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            YOUR
            <br />
            <span className="text-[#8B5CF6]" style={{ fontWeight: 300 }}>QUESTIONS</span>
          </h2>
          <p className="text-xl text-gray-400" style={{ fontWeight: 300, lineHeight: '1.7' }}>
            Everything you need to know about TDTM's identity resolution, data infrastructure, and managed services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#8B5CF6]/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white pr-8" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-[#8B5CF6]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#8B5CF6]" />
                    )}
                  </div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-4 leading-relaxed" style={{ fontWeight: 300 }}>
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-4" style={{ fontWeight: 300 }}>
            Still have questions?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors"
            style={{ fontWeight: 600 }}
          >
            Contact our team →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
