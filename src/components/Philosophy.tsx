import { MessageCircle, Scale, Heart } from "lucide-react";

const Philosophy = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Philosophy
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe in resolving disputes through dialogue, not litigation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Dialogue */}
          <div className="card-professional p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-4">
              No Dispute, But Dialogue
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We promote mutual discussion and understanding as the first step 
              toward resolution, avoiding unnecessary court battles.
            </p>
          </div>
          
          {/* Fairness */}
          <div className="card-professional p-8 text-center">
            <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-4">
              Fairness & Balance
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every case is approached with impartiality, ensuring both 
              parties are heard and treated with equal respect.
            </p>
          </div>
          
          {/* Peace */}
          <div className="card-professional p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-4">
              Peaceful Resolution
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our goal is to achieve harmony and closure, restoring 
              relationships and community bonds wherever possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
