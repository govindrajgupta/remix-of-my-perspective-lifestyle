import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/nyaya-alamban-logo-transparent.png";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-background/98 backdrop-blur-md shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] border-b border-border/20" 
          : "bg-background shadow-none border-b border-transparent"
      }`}
    >
      <div className="container-wide">
        <nav className={`flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled ? "py-3" : "py-4"
        }`}>
          {/* Logo with refined styling matching footer */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={logo} 
              alt="Nyaya Alamban Logo" 
              className="h-14 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="h-10 w-px bg-border/60 hidden sm:block" />
            <div className="flex flex-col justify-center hidden sm:flex">
              <span className="font-serif text-xl font-bold text-foreground tracking-wide leading-tight">
                Nyaya Alamban
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-[0.25em] uppercase leading-tight">
                In Law We Trust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with refined styling */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm tracking-wide transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-accent/90 hover:shadow-md"
            >
              Get Help
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Navigation with refined styling */}
        {isMenuOpen && (
          <div className="md:hidden py-5 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-lg font-medium tracking-wide transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {link.name}
                  <ChevronRight size={16} className="opacity-40" />
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 px-4 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-center tracking-wide transition-all duration-200 hover:bg-accent/90"
              >
                Get Help Today
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavHeader;
