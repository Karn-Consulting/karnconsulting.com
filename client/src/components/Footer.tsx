import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/image_1760332792562.png";
import { useLocation } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [, setLocation] = useLocation();

  return (
    <footer className="border-t border-primary/10 py-12 px-8" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={logoImage} 
                alt="Karn Consulting" 
                className="h-12 w-auto object-contain opacity-90 cursor-pointer"
                style={{ 
                  filter: "brightness(1.1) contrast(1.05)"
                }}
                onClick={() => setLocation("/")}
                data-testid="img-footer-logo" 
              />
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              A Division of <span className="font-semibold text-primary">Karn Corporation</span>
            </p>
            <p className="text-xs text-muted-foreground">
              GST: 03CLWPK4491C1ZX
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold" data-testid="text-footer-solutions-title">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#services" className="hover:text-primary transition-colors" data-testid="link-ai-ml">AI & ML Consulting</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors" data-testid="link-self-governing">Self-Governing Systems</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors" data-testid="link-analytics">Predictive Analytics</a></li>
              <li><a href="/#projects" className="hover:text-primary transition-colors" data-testid="link-automation">Process Automation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold" data-testid="text-footer-company-title">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#about" className="hover:text-primary transition-colors" data-testid="link-about">About Us</a></li>
              <li><a href="/#founder" className="hover:text-primary transition-colors" data-testid="link-leadership">Leadership</a></li>
              <li><a href="/#projects" className="hover:text-primary transition-colors" data-testid="link-case-studies">Case Studies</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors" data-testid="link-contact">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold" data-testid="text-footer-connect-title">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:support@karnconsulting.co" className="hover:text-primary transition-colors">
                  support@karnconsulting.co
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+917576956682" className="hover:text-primary transition-colors">
                  +91-7576956682
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-xs">
                  Amritsar, Punjab, India
                </span>
              </div>
              <div className="pt-2">
                <a 
                  href="https://www.linkedin.com/in/prateekkarn" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 hover-elevate active-elevate-2 transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p data-testid="text-copyright">© {currentYear} Karn Corporation. All rights reserved.</p>
            <span className="hidden md:inline">|</span>
            <p className="text-xs">Leading AI & ML Solutions</p>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => setLocation("/privacy-policy")}
              className="hover:text-primary transition-colors cursor-pointer" 
              data-testid="link-privacy"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setLocation("/terms-conditions")}
              className="hover:text-primary transition-colors cursor-pointer" 
              data-testid="link-terms"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}