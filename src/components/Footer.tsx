import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/nyaya-alamban-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Nyaya Alamban" className="h-16 w-auto drop-shadow-md" />
              <span className="text-2xl font-bold font-serif">Nyaya Alamban</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Justice for all. Providing legal assistance and promoting 
              alternative dispute resolution for those in need.
            </p>
            <p className="text-muted-foreground mt-3 italic">
              "In Law We Trust"
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>contact@nyayaalamban.org</p>
              <p>+91 XXXXX XXXXX</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Nyaya Alamban. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
