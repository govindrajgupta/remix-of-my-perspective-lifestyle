import { MessageCircle, Scale, Heart } from "lucide-react";

const Philosophy = () => {
  const philosophyItems = [
    {
      icon: MessageCircle,
      title: "No Dispute, But Dialogue",
      description: "We promote mutual discussion and understanding as the first step toward resolution, avoiding unnecessary court battles."
    },
    {
      icon: Scale,
      title: "Fairness & Balance",
      description: "Every case is approached with impartiality, ensuring both parties are heard and treated with equal respect."
    },
    {
      icon: Heart,
      title: "Peaceful Resolution",
      description: "Our goal is to achieve harmony and closure, restoring relationships and community bonds wherever possible."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            Our Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-1">
            We believe in resolving disputes through dialogue, not litigation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {philosophyItems.map((item, index) => (
            <div 
              key={index}
              className="bg-muted rounded-[2rem] p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: 0 }}
            >
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
