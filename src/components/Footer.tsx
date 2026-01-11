import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Heart } from "lucide-react";
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
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Main Footer */}
      <div className="container-wide py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand - Left Side */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-5 group">
              <img 
                src={logo} 
                alt="Nyaya Alamban" 
                className="h-20 lg:h-24 w-auto transition-all duration-500 group-hover:scale-105" 
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
            
            <p className="text-primary-foreground/75 leading-relaxed max-w-sm text-base">
              Empowering communities through legal assistance and promoting 
              alternative dispute resolution for equitable justice.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 rounded-xl bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-primary-foreground/90">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300"
                  >
                    <span className="link-underline">{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-primary-foreground/90">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contact@nyayaalamban.org" 
                  className="flex items-center gap-4 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <span>contact@nyayaalamban.org</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+91XXXXXXXXXX" 
                  className="flex items-center gap-4 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <span>+91 XXXXX XXXXX</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-sm text-primary-foreground/70">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 relative">
        <div className="container-wide py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50 flex items-center gap-1">
              © {currentYear} Nyaya Alamban. Made with <Heart className="w-4 h-4 text-accent animate-pulse-soft" /> for Justice
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 link-underline"
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