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
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container-wide relative px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            How We Work
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Our Approach
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 mb-4">
            We believe in engaging with the cross section of the society for achieving our goals. For this we will encompass Judges, Advocates, Doctors, Social Workers, Bureaucrats, students and anyone felt appropriate who can handle and develop methodologies for resolving disputes at their nascent stage without court involvement, focusing on consensus and mutuality.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            We shall in constant touch with Judiciary especially legal service Authorities try to reduce the pendency and arrears in the court system by facilitating amicable settlements and trustworthy mechanisms agreed by parties. Also with the help of legal service Authorities and Advocates on our panel we shall take steps for aiding undertrial prisoners by giving them legal assistance wherever it's required.
          </p>
        </ScrollReveal>
        
        {/* Collaborators Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {collaborators.map((item, index) => (
            <ScrollReveal key={index} delay={index * 75} direction="scale">
              <div className="group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-accent/50 h-full card-premium">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-lg">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2 text-foreground transition-colors duration-300 group-hover:text-primary">{item.title}</h4>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Two Column Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <ScrollReveal direction="left" delay={100}>
            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-deep-blue-light rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 text-primary-foreground h-full group">
              {/* Animated decorative elements */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-primary-foreground/10 rounded-full blur-xl" />
              
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary-foreground/20 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  ⚖️ Court System
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
                  Reducing Court Pendency
                </h3>
                <p className="text-primary-foreground/85 leading-relaxed mb-5 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
                  By resolving disputes through mediation and dialogue, we help reduce 
                  the burden on courts and eliminate case arrears, ensuring faster 
                  justice for all.
                </p>
                <Button 
                  asChild
                  variant="secondary"
                  size="sm"
                  className="rounded-full group/btn transition-all duration-300 hover:shadow-lg hover:scale-[1.02] text-sm sm:text-base"
                >
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={200}>
            <div className="relative overflow-hidden bg-gradient-to-br from-accent via-accent to-saffron-light rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 text-accent-foreground h-full group">
              {/* Animated decorative elements */}
              <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-accent-foreground/10 rounded-full blur-xl" />
              
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent-foreground/20 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  🤝 Legal Aid
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
                  Supporting Undertrial Prisoners
                </h3>
                <p className="text-accent-foreground/85 leading-relaxed mb-5 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
                  We provide essential legal aid to undertrial prisoners who lack 
                  resources, ensuring their rights are protected and cases are 
                  expedited fairly.
                </p>
                <Button 
                  asChild
                  variant="secondary"
                  size="sm"
                  className="rounded-full group/btn transition-all duration-300 hover:shadow-lg hover:scale-[1.02] text-sm sm:text-base"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Help
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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