import { motion } from "framer-motion";
import { ShieldCheck, Truck, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Every Medicine Genuine, Every Bond True",
    subtitle: "Authenticity Guarantee",
    description:
      "We stock only 100% original and verified medicines. No compromise on your health, ever.",
    color: "trust-green" as const,
  },
  {
    icon: Truck,
    title: "Stay Home, We'll Take Care of You",
    subtitle: "Caring Delivery",
    description:
      "Fast and safe delivery across Depalpur and Bhuman Shah. Your medicine, right at your doorstep.",
    color: "accent" as const,
  },
  {
    icon: HeartHandshake,
    title: "We Are With You in Difficult Times",
    subtitle: "24/7 Support",
    description:
      "Always available via phone or WhatsApp. When it comes to your health, no hour is too late.",
    color: "heart-red" as const,
  },
];

const colorMap = {
  "trust-green": "bg-trust-green/10 text-trust-green",
  accent: "bg-accent/10 text-accent",
  "heart-red": "bg-heart-red/10 text-heart-red",
};

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
          Heartfelt Service, A Promise of Health
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          At J.J Medical Store, every service is delivered with love and responsibility.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow group"
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorMap[s.color]}`}>
              <s.icon className="w-7 h-7" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              {s.subtitle}
            </p>
            <h3 className="font-display text-xl font-bold text-primary mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
