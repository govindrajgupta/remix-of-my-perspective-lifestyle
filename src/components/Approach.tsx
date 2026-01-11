import { Users, Briefcase, Stethoscope, GraduationCap, Building, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from './ScrollReveal';
import { Button } from "@/components/ui/button";

const Approach = () => {
  const collaborators = [
    { icon: Briefcase, title: "Judges", description: "Guidance on legal procedures" },
    { icon: Users, title: "Advocates", description: "Expert legal representation" },
    { icon: Stethoscope, title: "Doctors", description: "Medical-legal expertise" },
    { icon: Heart, title: "Social Workers", description: "Community support" },
    { icon: Building, title: "Bureaucrats", description: "Administrative assistance" },
    { icon: GraduationCap, title: "Students", description: "Pro bono legal aid" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with diverse professionals to provide comprehensive 
            legal assistance and resolve disputes before they reach the courts.
          </p>
        </ScrollReveal>
        
        {/* Collaborators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {collaborators.map((item, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="group bg-card rounded-2xl p-6 text-center border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/50 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-sm mb-1 text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Two Column Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden bg-primary rounded-3xl p-8 md:p-10 text-primary-foreground h-full">
              {/* Pattern overlay */}
              <div className="absolute inset-0 pattern-dots opacity-10" />
              
              <div className="relative">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-sm font-medium mb-4">
                  Court System
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Reducing Court Pendency
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  By resolving disputes through mediation and dialogue, we help reduce 
                  the burden on courts and eliminate case arrears, ensuring faster 
                  justice for all.
                </p>
                <Button 
                  asChild
                  variant="secondary"
                  className="rounded-full group"
                >
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="relative overflow-hidden bg-accent rounded-3xl p-8 md:p-10 text-accent-foreground h-full">
              {/* Pattern overlay */}
              <div className="absolute inset-0 pattern-dots opacity-10" />
              
              <div className="relative">
                <span className="inline-block px-3 py-1 rounded-full bg-accent-foreground/20 text-sm font-medium mb-4">
                  Legal Aid
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Supporting Undertrial Prisoners
                </h3>
                <p className="text-accent-foreground/80 leading-relaxed mb-6">
                  We provide essential legal aid to undertrial prisoners who lack 
                  resources, ensuring their rights are protected and cases are 
                  expedited fairly.
                </p>
                <Button 
                  asChild
                  variant="secondary"
                  className="rounded-full group"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Help
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Approach;
