import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 trust-gradient opacity-30" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Scale className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-slide-up">
            Welcome to Nyaya Alamban
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-up stagger-1">
            Committed to justice, legal assistance, and alternative dispute resolution. 
            We believe in dialogue over dispute, and hope through law.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-2">
            <Link to="/about" className="btn-primary inline-block">
              Learn About Us
            </Link>
            <Link to="/contact" className="btn-outline inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
