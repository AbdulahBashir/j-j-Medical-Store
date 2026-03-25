import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ownerImg from "@/assets/owner-portrait.jpg";

const OwnerSection = () => (
  <section id="owner" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img
              src={ownerImg}
              alt="Muhammad Abu Bakar - Owner of J.J Medical Store"
              loading="lazy"
              width={800}
              height={800}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-6">
              <p className="text-primary-foreground font-display text-xl font-semibold">Muhammad Abu Bakar</p>
              <p className="text-secondary text-sm">Owner, J.J Medical Store</p>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-light rounded-2xl -z-10" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-2xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Quote className="w-10 h-10 text-accent mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            Consult Your Brother, Muhammad Abu Bakar
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every customer is a family member to us. In Bhuman Shah and Depalpur, J.J Medical Store stands for
            100% original medicines and honest prices — always.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We understand how important your health is. That's why every medicine we provide is verified and authentic
            before it reaches you. Your trust is our greatest medicine.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Verified Pharmacy", "Genuine Products", "Community Trusted"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-sky-light text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default OwnerSection;
