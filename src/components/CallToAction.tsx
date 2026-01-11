import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <ScrollReveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative space-y-8 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mx-auto">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                Need Legal Help?
              </h2>
              
              <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
                We're here to help you navigate legal challenges with compassion and expertise. 
                Get in touch for a free consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-medium transition-all hover:shadow-lg hover:scale-105 group"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us Today
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-medium border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
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
