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
              Welcome to <span className="text-primary">Nyaya Alamban</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="w-12 sm:w-16 h-1 bg-accent mx-auto rounded-full" />
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
              "Nyaya Alamban" is a brain child of Social Worker Mr Raghavenddhiraa not only limited to get legal assistance for people in need and who are falsely framed but also evolving Alternative Dispute Resolution system thereby ending litigations before reaching courts.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
              "Nyaya Alamban" as the name indicates, has it's clear cut agenda on being a ray of hope for resolving disputes and getting Justice. The name <strong className="text-foreground">"Alamban"</strong> has special meaning, since it means hope, pillar and a source of getting <strong className="text-foreground">"Nyaya"</strong> that is Justice for the people. The organization encourages people to have "Trust in Law".
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
              Here we believe in people belonging to various sections of society irrespective of their religion, caste, language and gender coming together on one platform for resolving disputes in a cordial and informal atmosphere. The image in the motto of Nyaya Alamban represents the fairness and balance with which people come together in helping to resolve their disputes by mutuality and believe in <strong className="text-foreground">"No dispute but dialogue"</strong> meaning by the way of discussion and dialogue disputes could be resolved.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
