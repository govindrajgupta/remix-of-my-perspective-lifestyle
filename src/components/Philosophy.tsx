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
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative px-4 sm:px-6">
        <ScrollReveal className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Our Values
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Our Philosophy
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            We believe in resolving disputes through dialogue, not litigation.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {philosophyItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="group relative h-full">
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${item.gradient} rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-border/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 h-full overflow-hidden`}>
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-card shadow-lg flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="relative text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-foreground transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="relative text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-accent/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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