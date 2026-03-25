import { Heart, MapPin, Phone, Mail, Code } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-heart-red fill-heart-red" />
            <span className="font-display text-xl font-bold">J.J Medical Store</span>
          </div>
          <p className="text-secondary/80 leading-relaxed text-sm">
            Happy Bhuman Shah, Healthy Pakistan. Every medicine comes with our love and care.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-secondary/80">
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

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-secondary/80">
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

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-secondary/60">
        <p>J.J Medical Store — Happy Bhuman Shah, Healthy Pakistan</p>
        <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        
        {/* DEVELOPER CREDIT SECTION */}
        <div className="mt-4 flex flex-col items-center gap-1 border-t border-white/5 pt-4">
          <p className="flex items-center gap-1.5 text-xs tracking-wide">
            <Code className="w-3.5 h-3.5 text-accent" />
            DESIGNED & DEVELOPED BY
          </p>
          <a 
            href="https://github.com/AbdulahBashir" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white font-bold text-sm hover:text-accent transition-all duration-300 tracking-widest uppercase"
          >
            Abdullah Bashir
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;