import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-black border-l border-white/10 z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-6">
                  <a
                    href="#tdtm"
                    className="block text-lg text-gray-300 hover:text-[#8B5CF6] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    TDTM Pixel
                  </a>
                  <a
                    href="#ecosystem"
                    className="block text-lg text-gray-300 hover:text-[#0066FF] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ecosystem
                  </a>
                  <a
                    href="#services"
                    className="block text-lg text-gray-300 hover:text-[#00D9FF] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#pricing"
                    className="block text-lg text-gray-300 hover:text-[#00D9FF] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#results"
                    className="block text-lg text-gray-300 hover:text-[#39FF14] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Results
                  </a>

                  <div className="pt-6 border-t border-white/10">
                    <Button
                      className="w-full bg-[#00D9FF] hover:bg-[#00A8CC] text-white"
                      style={{ fontWeight: 700 }}
                      asChild
                    >
                      <a href="mailto:hello@tdtm.io?subject=Get%20Started">
                        Get Started
                      </a>
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
