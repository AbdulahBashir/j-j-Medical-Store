import { Heart, MapPin, Phone, Mail, Code } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-10"> {/* py-16 se py-10 kar diya */}
      <div className="grid md:grid-cols-3 gap-8"> {/* gap kam kiya */}
        {/* Section 1: Branding */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-6 h-6 text-heart-red fill-heart-red" />
            <span className="font-display text-xl font-bold">J.J Medical Store</span>
          </div>
          <p className="text-secondary/80 leading-relaxed text-sm">
            Happy Bhuman Shah, Healthy Pakistan. Every medicine comes with our love and care.
          </p>
        </div>

        {/* Section 2: Contact Info */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-secondary/80">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              Bhuman Shah, Depalpur, Punjab, Pakistan
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href="https://wa.me/923370676631" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                +92 337 067 6631
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:abubakarbrand9833@gmail.com" className="hover:text-accent transition-colors">
                abubakarbrand9833@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Navigation */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm text-secondary/80">
            {[
              { label: "Home", href: "#home" },
              { label: "Our Medicines", href: "#services" },
              { label: "About Owner", href: "#owner" },
              { label: "Contact Us", href: "#contact" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-accent transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final Bottom Section (Copyright & Credits) */}
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center"> {/* mt-12 se mt-8 kar diya */}
        <p className="text-xs text-secondary/60">
          © {new Date().getFullYear()} J.J Medical Store. All rights reserved.
        </p>
        
        <div className="mt-2 flex items-center justify-center gap-2 text-[10px] tracking-widest text-secondary/40 uppercase">
          <Code className="w-3 h-3" />
          <span>DEVELOPED BY</span>
          <a 
            href="https://github.com/AbdulahBashir" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white font-bold hover:text-accent transition-colors"
          >
            Abdullah Bashir
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;