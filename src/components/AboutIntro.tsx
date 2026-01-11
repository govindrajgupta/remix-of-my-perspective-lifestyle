import ScrollReveal from './ScrollReveal';
import { Quote } from 'lucide-react';

const AboutIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Quote className="w-8 h-8 text-accent" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Nyaya Alamban is a pillar of hope for justice, providing legal assistance 
              and promoting{" "}
              <span className="text-primary">dialogue over dispute</span>.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Founded by Social Worker Mr. Raghavenddhiraa, we believe in "Trust in Law" 
              and serve all individuals irrespective of religion, caste, language, or gender. 
              The name carries deep meaning: <strong className="text-foreground">"Nyaya"</strong> stands for Justice, 
              and <strong className="text-foreground">"Alamban"</strong> means Hope or Pillar.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
