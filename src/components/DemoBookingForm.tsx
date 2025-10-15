import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { ArrowRight, CheckCircle2, Mail, Building2, Users, Phone } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function DemoBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}
Company Size: ${formData.companySize}

Message:
${formData.message || 'No additional message provided'}
    `.trim();
    
    // Open mailto link with form data
    window.location.href = `mailto:hello@tdtm.io?subject=Demo Request - ${formData.company}&body=${encodeURIComponent(emailBody)}`;
    
    setSubmitted(true);
    toast.success("Opening your email client. Please send the email to submit your request.");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-[#39FF14]/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#39FF14]" />
        </div>
        <h3 className="text-2xl mb-4" style={{ fontWeight: 900 }}>
          Request Received!
        </h3>
        <p className="text-gray-400 mb-8" style={{ fontWeight: 300 }}>
          Our team will reach out within 24 hours to schedule your demo and discuss your data activation needs.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="border-white/20 hover:bg-white/5"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm mb-2 text-gray-300" style={{ fontWeight: 600 }}>
            Full Name *
          </label>
          <Input
            id="name"
            required
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2 text-gray-300" style={{ fontWeight: 600 }}>
            Business Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              id="email"
              type="email"
              required
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-10"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm mb-2 text-gray-300" style={{ fontWeight: 600 }}>
            Company Name *
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              id="company"
              required
              placeholder="Acme Corp"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-10"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm mb-2 text-gray-300" style={{ fontWeight: 600 }}>
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-10"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="companySize" className="block text-sm mb-2 text-gray-300" style={{ fontWeight: 600 }}>
          Company Size *
        </label>
        <select
          id="companySize"
          required
          value={formData.companySize}
          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white"
        >
          <option value="" className="bg-black">Select company size</option>
          <option value="1-10" className="bg-black">1-10 employees</option>
          <option value="11-50" className="bg-black">11-50 employees</option>
          <option value="51-200" className="bg-black">51-200 employees</option>
          <option value="201-500" className="bg-black">201-500 employees</option>
          <option value="501-1000" className="bg-black">501-1000 employees</option>
          <option value="1000+" className="bg-black">1000+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm mb-2 text-gray-300" style={{ fontWeight: 600 }}>
          What would you like to accomplish with TDTM?
        </label>
        <Textarea
          id="message"
          placeholder="E.g., Identify more website visitors, build custom audiences, integrate with Klaviyo/HubSpot, white label for clients..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#00D9FF] hover:bg-[#00A8CC] text-white group"
        style={{ fontWeight: 700 }}
      >
        Request Demo & Consultation
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>

      <p className="text-xs text-gray-500 text-center" style={{ fontWeight: 300 }}>
        By submitting this form, you agree to our Privacy Policy. We'll never share your information.
      </p>
    </form>
  );
}
