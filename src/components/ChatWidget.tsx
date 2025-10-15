import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "./ui/button";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const quickQuestions = [
    "How does the pixel work?",
    "What's the match rate?",
    "Show me pricing",
    "Schedule a demo"
  ];

  const handleQuickQuestion = (question: string) => {
    // In a real implementation, this would send the message or trigger an action
    if (question === "Schedule a demo") {
      window.location.href = 'mailto:hello@tdtm.io?subject=Schedule%20a%20Demo';
      setIsOpen(false);
    } else if (question === "Show me pricing") {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (question === "How does the pixel work?") {
      // Scroll to TDTM section
      document.getElementById('tdtm')?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (question === "What's the match rate?") {
      // Scroll to FAQ section or show specific info
      const faqSection = document.querySelector('[id*="faq"]');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#0066FF] text-white shadow-2xl shadow-[#00D9FF]/30 flex items-center justify-center z-50 hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-black/95 backdrop-blur-xl border border-[#00D9FF]/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-gradient-to-r from-[#00D9FF]/20 to-[#0066FF]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#0066FF] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white" style={{ fontWeight: 700 }}>
                    TDTM Support
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    <span className="text-xs text-gray-400" style={{ fontWeight: 300 }}>
                      Typically replies in minutes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {/* Welcome Message */}
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#0066FF] flex items-center justify-center text-xs text-white" style={{ fontWeight: 700 }}>
                    T
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 mb-1">
                      <p className="text-white text-sm" style={{ fontWeight: 300, lineHeight: '1.5' }}>
                        👋 Welcome! I'm here to help you learn about TDTM's identity resolution, data infrastructure, and managed services.
                      </p>
                    </div>
                    <span className="text-xs text-gray-500" style={{ fontWeight: 300 }}>Just now</span>
                  </div>
                </motion.div>

                {/* Quick Questions */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-xs text-gray-400" style={{ fontWeight: 600 }}>
                    Quick questions:
                  </p>
                  {quickQuestions.map((question, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00D9FF]/30 hover:bg-white/10 transition-all text-sm text-white"
                      style={{ fontWeight: 300 }}
                    >
                      {question}
                    </button>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <form 
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (message.trim()) {
                    // In real implementation, would send message
                    setMessage("");
                  }
                }}
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF]/30 text-sm"
                  style={{ fontWeight: 300 }}
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-[#00D9FF] hover:bg-[#00A8CC] text-white px-4"
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center" style={{ fontWeight: 300 }}>
                Available 24/7 • Average response time: 5 minutes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
