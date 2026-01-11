import { Users, Briefcase, Stethoscope, GraduationCap, Building, Heart } from "lucide-react";

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
    <section className="section-padding surface-grey">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Approach
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We collaborate with diverse professionals to provide comprehensive 
            legal assistance and resolve disputes before they reach the courts.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {collaborators.map((item, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-6 text-center border border-border hover:shadow-md transition-shadow"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background rounded-lg p-8 border border-border">
            <h3 className="font-serif text-xl font-semibold text-primary mb-4">
              Reducing Court Pendency
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              By resolving disputes through mediation and dialogue, we help reduce 
              the burden on courts and eliminate case arrears, ensuring faster 
              justice for all.
            </p>
          </div>
          
          <div className="bg-background rounded-lg p-8 border border-border">
            <h3 className="font-serif text-xl font-semibold text-primary mb-4">
              Supporting Undertrial Prisoners
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We provide essential legal aid to undertrial prisoners who lack 
              resources, ensuring their rights are protected and cases are 
              expedited fairly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
