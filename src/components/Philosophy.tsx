import { MessageCircle, Scale, Heart } from "lucide-react";
import ScrollReveal from './ScrollReveal';

const Philosophy = () => {
  const philosophyItems = [
    {
      icon: MessageCircle,
      title: "No Dispute, But Dialogue",
      description: "We promote mutual discussion and understanding as the first step toward resolution, avoiding unnecessary court battles.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Scale,
      title: "Fairness & Balance",
      description: "Every case is approached with impartiality, ensuring both parties are heard and treated with equal respect.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Heart,
      title: "Peaceful Resolution",
      description: "Our goal is to achieve harmony and closure, restoring relationships and community bonds wherever possible.",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in resolving disputes through dialogue, not litigation.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {philosophyItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative bg-card rounded-2xl p-8 border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-border h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary/0 via-accent to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
