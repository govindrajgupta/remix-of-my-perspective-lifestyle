import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Scale } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Shield, value: "10+", label: "Years of Service" },
    { icon: Users, value: "5000+", label: "Cases Resolved" },
    { icon: Scale, value: "100%", label: "Commitment" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container-wide relative py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              <span className="text-sm font-medium">Justice for All</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-4 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
                A Pillar of{" "}
                <span className="text-primary">Hope</span>{" "}
                for Justice
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Committed to legal assistance and alternative dispute resolution. 
                We believe in dialogue over dispute, and hope through law.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-slide-up stagger-1">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium transition-all hover:shadow-lg hover:scale-105 group"
              >
                <Link to="/about" className="flex items-center gap-2">
                  Learn About Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50 animate-slide-up stagger-2">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-accent" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
                alt="Justice and legal aid"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card px-6 py-4 rounded-2xl shadow-lg border border-border/50 animate-float">
              <p className="text-sm font-medium text-muted-foreground">Trusted by</p>
              <p className="text-2xl font-bold text-primary">1000+ Families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
