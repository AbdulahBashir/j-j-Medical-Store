import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import heroImg from "@/assets/pharmacist-hero.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0">
      <img src={heroImg} alt="J.J Medical Store pharmacy" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/70 to-midnight/40" />
    </div>

    <div className="container relative z-10 mx-auto px-6 py-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 bg-sky-light/20 backdrop-blur-sm border border-sky-light/30 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 text-heart-red fill-heart-red" />
            Bhuman Shah, Depalpur
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Health Is Not Just Medicine,{" "}
          <span className="text-secondary">It's Our Promise to You.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-secondary/90 leading-relaxed mb-10 max-w-xl"
        >
          J.J Medical Store is more than a pharmacy. We are your neighbors in Bhuman Shah, Depalpur,
          dedicated to keeping your family smiling and healthy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://wa.me/923370676631"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-accent-foreground px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition shadow-glow animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5" />
            Talk to Us on WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary-foreground/10 transition"
          >
            Our Services
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
