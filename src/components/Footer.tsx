import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-primary-foreground mb-4">
              Nyaya Alamban
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Justice for all. Providing legal assistance and promoting 
              alternative dispute resolution for those in need.
            </p>
            <p className="text-primary-foreground/70 text-sm mt-3 italic">
              "In Law We Trust"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Email: contact@nyayaalamban.org</p>
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/70 text-sm">
            © {currentYear} Nyaya Alamban. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
