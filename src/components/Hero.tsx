import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Scale, Sparkles } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Shield, value: "10+", label: "Years of Service" },
    { icon: Users, value: "5000+", label: "Cases Resolved" },
    { icon: Scale, value: "100%", label: "Commitment" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft delay-500" />
      
      <div className="container-wide relative py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 animate-reveal-up">
              <Sparkles className="w-4 h-4 animate-pulse-soft" />
              <span className="text-sm font-medium">Justice for All</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-foreground animate-reveal-up delay-100">
                A Pillar of{" "}
                <span className="text-primary relative inline-block">
                  Hope
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0 7 Q 25 0, 50 4 T 100 3" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" className="animate-fade-in delay-500" />
                  </svg>
                </span>{" "}
                for Justice
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 animate-reveal-up delay-200">
                Committed to legal assistance and alternative dispute resolution. 
                We believe in dialogue over dispute, and hope through law.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-reveal-up delay-300">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-0.5 group"
              >
                <Link to="/about" className="flex items-center gap-2">
                  Learn About Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50 animate-reveal-up delay-400">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center lg:text-left group cursor-default"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{stat.value}</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative animate-reveal-right delay-200">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse-soft" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
                alt="Justice and legal aid"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-accent/60 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-accent/60 rounded-bl-2xl" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card px-6 py-4 rounded-2xl shadow-xl border border-border/50 animate-float">
              <p className="text-sm font-medium text-muted-foreground">Trusted by</p>
              <p className="text-2xl font-bold text-primary">1000+ Families</p>
            </div>

            {/* Secondary floating element */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg animate-bounce-subtle hidden lg:block">
              <span className="text-sm font-bold">Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;