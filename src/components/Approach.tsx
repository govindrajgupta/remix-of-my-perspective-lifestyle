import { Users, Briefcase, Stethoscope, GraduationCap, Building, Heart, ArrowRight, Zap } from "lucide-react";
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
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container-wide relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            How We Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Approach
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with diverse professionals to provide comprehensive 
            legal assistance and resolve disputes before they reach the courts.
          </p>
        </ScrollReveal>
        
        {/* Collaborators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20">
          {collaborators.map((item, index) => (
            <ScrollReveal key={index} delay={index * 75} direction="scale">
              <div className="group bg-card rounded-2xl p-6 md:p-8 text-center border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-accent/50 h-full card-premium">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-lg">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-sm md:text-base mb-2 text-foreground transition-colors duration-300 group-hover:text-primary">{item.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Two Column Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal direction="left" delay={100}>
            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-deep-blue-light rounded-3xl p-8 md:p-12 text-primary-foreground h-full group">
              {/* Animated decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl" />
              
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/20 text-sm font-medium mb-6">
                  ⚖️ Court System
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Reducing Court Pendency
                </h3>
                <p className="text-primary-foreground/85 leading-relaxed mb-8 text-base md:text-lg">
                  By resolving disputes through mediation and dialogue, we help reduce 
                  the burden on courts and eliminate case arrears, ensuring faster 
                  justice for all.
                </p>
                <Button 
                  asChild
                  variant="secondary"
                  className="rounded-full group/btn transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={200}>
            <div className="relative overflow-hidden bg-gradient-to-br from-accent via-accent to-saffron-light rounded-3xl p-8 md:p-12 text-accent-foreground h-full group">
              {/* Animated decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-foreground/10 rounded-full blur-xl" />
              
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-foreground/20 text-sm font-medium mb-6">
                  🤝 Legal Aid
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Supporting Undertrial Prisoners
                </h3>
                <p className="text-accent-foreground/85 leading-relaxed mb-8 text-base md:text-lg">
                  We provide essential legal aid to undertrial prisoners who lack 
                  resources, ensuring their rights are protected and cases are 
                  expedited fairly.
                </p>
                <Button 
                  asChild
                  variant="secondary"
                  className="rounded-full group/btn transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Help
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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