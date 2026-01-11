import ScrollReveal from './ScrollReveal';

const AboutIntro = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4">
      <div className="text-center space-y-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Nyaya Alamban is a pillar of hope for justice, providing legal assistance 
            and promoting dialogue over dispute.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Founded by Social Worker Mr. Raghavenddhiraa, we believe in "Trust in Law" 
            and serve all individuals irrespective of religion, caste, language, or gender. 
            The name carries deep meaning: "Nyaya" stands for Justice, and "Alamban" means 
            Hope or Pillar.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutIntro;
