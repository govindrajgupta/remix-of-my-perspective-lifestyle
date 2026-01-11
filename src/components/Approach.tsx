import { Users, Briefcase, Stethoscope, GraduationCap, Building, Heart } from "lucide-react";
import ScrollReveal from './ScrollReveal';

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
    <section className="py-16 md:py-24 bg-muted rounded-[2.5rem] mx-3 md:mx-6 lg:mx-8 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with diverse professionals to provide comprehensive 
            legal assistance and resolve disputes before they reach the courts.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {collaborators.map((item, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div 
                className="bg-background rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="bg-background rounded-2xl p-8 transition-all duration-300 hover:shadow-lg h-full">
              <h3 className="text-xl font-bold mb-4">
                Reducing Court Pendency
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                By resolving disputes through mediation and dialogue, we help reduce 
                the burden on courts and eliminate case arrears, ensuring faster 
                justice for all.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="bg-background rounded-2xl p-8 transition-all duration-300 hover:shadow-lg h-full">
              <h3 className="text-xl font-bold mb-4">
                Supporting Undertrial Prisoners
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide essential legal aid to undertrial prisoners who lack 
                resources, ensuring their rights are protected and cases are 
                expedited fairly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Approach;
