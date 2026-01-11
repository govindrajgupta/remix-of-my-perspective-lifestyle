import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <ScrollReveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-deep-blue-light rounded-3xl p-10 md:p-20 text-center group">
            {/* Animated decorative elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-foreground/5 rounded-full blur-2xl" />
            
            {/* Floating particles */}
            <div className="absolute top-10 left-20 w-2 h-2 bg-accent rounded-full animate-float" />
            <div className="absolute top-20 right-32 w-3 h-3 bg-accent/60 rounded-full animate-float delay-300" />
            <div className="absolute bottom-16 left-1/4 w-2 h-2 bg-primary-foreground/40 rounded-full animate-bounce-subtle" />
            
            <div className="relative space-y-8 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mx-auto animate-pulse-soft">
                <MessageCircle className="w-10 h-10 text-accent" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight">
                Need Legal Help?
              </h2>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
                We're here to help you navigate legal challenges with compassion and expertise. 
                Get in touch for a free consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-7 text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] group/btn animate-glow"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Contact Us Today
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 py-7 text-base md:text-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
                >
                  <Link to="/about">Learn About Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToAction;