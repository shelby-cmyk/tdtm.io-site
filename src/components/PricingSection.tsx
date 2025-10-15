import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Building2, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const pricingTiers = [
  {
    name: "TDTM Pixel",
    icon: Zap,
    description: "Identity resolution pixel for real-time visitor identification",
    price: "$199",
    priceSubtext: "per month + per-record pricing",
    color: "#39FF14",
    features: [
      "TDTM pixel with 50% match rate",
      "Real-time visitor identification",
      "Custom audience builder included",
      "Access to 500M+ identity records",
      "100+ platform integrations",
      "API & webhook access",
      "Email & chat support",
      "Self-service documentation"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "White Label",
    icon: Building2,
    description: "For agencies who want to offer identity resolution to clients",
    price: "$499",
    priceSubtext: "per month + per-record pricing",
    color: "#8B5CF6",
    features: [
      "Everything in TDTM Pixel",
      "White label platform for agencies",
      "Custom branding & domain",
      "Multi-client dashboard access",
      "Agency support & training",
      "Priority implementation",
      "Custom reporting dashboards",
      "Reseller program benefits"
    ],
    cta: "Contact Sales",
    popular: true
  },
  {
    name: "Enterprise",
    icon: Rocket,
    description: "Fully managed services with strategic campaign support",
    price: "Custom",
    priceSubtext: "Based on scope + per-record pricing",
    color: "#00D9FF",
    features: [
      "Everything in White Label",
      "Dedicated account manager",
      "Campaign strategy & planning",
      "Multi-channel activation",
      "Custom data integrations",
      "Weekly optimization calls",
      "Advanced reporting & analytics",
      "SLA & priority support"
    ],
    cta: "Schedule Demo",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-black via-[#00D9FF]/5 to-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
            <span className="text-sm text-[#00D9FF]" style={{ fontWeight: 600 }}>PERFORMANCE-BASED PRICING</span>
          </div>
          <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            PAY FOR RESULTS,
            <br />
            <span className="text-[#00D9FF]" style={{ fontWeight: 300 }}>NOT PROMISES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontWeight: 300, lineHeight: '1.7' }}>
            All plans include the <span className="text-[#00D9FF]" style={{ fontWeight: 600 }}>audience builder</span>, <span className="text-[#00D9FF]" style={{ fontWeight: 600 }}>500M+ identity records</span>, and <span className="text-[#00D9FF]" style={{ fontWeight: 600 }}>100+ integrations</span>. You only pay per-record for identities we successfully resolve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-3xl backdrop-blur border transition-all ${
                tier.popular
                  ? 'bg-white/10 border-[#00D9FF]/50 shadow-2xl shadow-[#00D9FF]/20 scale-105'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00D9FF] text-black text-xs"
                     style={{ fontWeight: 700 }}>
                  MOST POPULAR
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${tier.color}20` }}
                >
                  <tier.icon className="w-6 h-6" style={{ color: tier.color }} />
                </div>
                <div>
                  <h3 className="text-white" style={{ fontWeight: 700, fontSize: '1.5rem' }}>
                    {tier.name}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 mb-6" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                {tier.description}
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-white" style={{ fontSize: '2.5rem', fontWeight: 900 }}>
                    {tier.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>
                  {tier.priceSubtext}
                </p>
              </div>

              <Button
                className={`w-full mb-8 ${
                  tier.popular
                    ? 'bg-[#00D9FF] hover:bg-[#00A8CC] text-black'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
                size="lg"
                style={{ fontWeight: 700 }}
                asChild
              >
                <a href={`mailto:hello@tdtm.io?subject=${encodeURIComponent(tier.cta + ' - ' + tier.name)}`}>
                  {tier.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>

              <div className="space-y-3">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div 
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${tier.color}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: tier.color }} />
                    </div>
                    <span className="text-gray-300 text-sm" style={{ fontWeight: 300 }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Per-Record Pricing Note */}
        <motion.div
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#39FF14]/10 via-[#00D9FF]/10 to-[#8B5CF6]/10 border border-[#39FF14]/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#39FF14]" />
            </div>
            <div>
              <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                Pay Only for Resolved Identities
              </h4>
              <p className="text-gray-400 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                All plans include a per-record charge based only on successfully resolved visitor identities. No charges for unmatched traffic—you only pay when the pixel works.
              </p>
              <p className="text-gray-500 text-xs" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                Per-record pricing varies by volume and plan tier. Contact sales for detailed pricing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Consultation CTA */}
        <motion.div
          className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-[#00D9FF]/10 via-[#8B5CF6]/10 to-[#39FF14]/10 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <h3 className="text-white mb-3" style={{ fontWeight: 700, fontSize: '1.5rem' }}>
              Not sure which plan is right for you?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto" style={{ fontWeight: 300, lineHeight: '1.6' }}>
              Schedule a consultation with our team to discuss your specific needs, traffic volume, and campaign goals. We'll design a custom package that delivers maximum ROI.
            </p>
            <Button
              variant="outline"
              className="border-[#00D9FF]/30 hover:bg-[#00D9FF]/10"
              asChild
            >
              <a href="mailto:hello@tdtm.io?subject=Schedule%20Consultation">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
