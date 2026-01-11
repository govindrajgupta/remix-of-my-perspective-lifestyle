import ScrollReveal from './ScrollReveal';
import { Quote } from 'lucide-react';

const AboutIntro = () => {
  return (
<section className="py-12 sm:py-16 md:py-24 bg-muted/50">
      <div className="container-wide px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 mb-4 sm:mb-6">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground px-2">
              Nyaya Alamban is a pillar of hope for justice, providing legal assistance 
              and promoting{" "}
              <span className="text-primary">dialogue over dispute</span>.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="w-12 sm:w-16 h-1 bg-accent mx-auto rounded-full" />
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
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
