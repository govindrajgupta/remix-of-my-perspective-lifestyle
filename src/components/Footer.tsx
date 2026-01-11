import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/nyaya-alamban-logo-transparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand - Left Side */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-5 group">
              <img 
                src={logo} 
                alt="Nyaya Alamban" 
                className="h-20 lg:h-24 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="border-l-2 border-primary-foreground/20 pl-5">
                <span className="text-xl lg:text-2xl font-bold font-serif block tracking-tight">
                  Nyaya Alamban
                </span>
                <span className="text-xs font-medium text-primary-foreground/60 tracking-[0.25em] uppercase">
                  In Law We Trust
                </span>
              </div>
            </Link>
            
            <p className="text-primary-foreground/75 leading-relaxed max-w-sm text-sm lg:text-base">
              Empowering communities through legal assistance and promoting 
              alternative dispute resolution for equitable justice.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-200 flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground/90">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-primary-foreground/90">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contact@nyayaalamban.org" 
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span>contact@nyayaalamban.org</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+91XXXXXXXXXX" 
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span>+91 XXXXX XXXXX</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-primary-foreground/50">
              © {currentYear} Nyaya Alamban. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
