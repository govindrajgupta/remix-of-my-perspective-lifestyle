import { MessageCircle, Scale, Heart, Sparkles } from "lucide-react";
import ScrollReveal from './ScrollReveal';

const Philosophy = () => {
  const philosophyItems = [
    {
      icon: MessageCircle,
      title: "No Dispute, But Dialogue",
      description: "We promote mutual discussion and understanding as the first step toward resolution, avoiding unnecessary court battles.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Scale,
      title: "Fairness & Balance",
      description: "Every case is approached with impartiality, ensuring both parties are heard and treated with equal respect.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Heart,
      title: "Peaceful Resolution",
      description: "Our goal is to achieve harmony and closure, restoring relationships and community bonds wherever possible.",
      gradient: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative">
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Values
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Philosophy
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in resolving disputes through dialogue, not litigation.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="group relative h-full">
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-8 md:p-10 border border-border/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 h-full overflow-hidden`}>
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-2xl bg-card shadow-lg flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3">
                    <item.icon className="w-8 h-8 text-accent transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="relative text-xl md:text-2xl font-bold mb-4 text-foreground transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="relative text-muted-foreground leading-relaxed text-base">
                    {item.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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