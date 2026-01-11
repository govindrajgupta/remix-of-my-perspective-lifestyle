const AboutIntro = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
          Nyaya Alamban is a pillar of hope for justice, providing legal assistance 
          and promoting dialogue over dispute.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          Founded by Social Worker Mr. Raghavenddhiraa, we believe in "Trust in Law" 
          and serve all individuals irrespective of religion, caste, language, or gender. 
          The name carries deep meaning: "Nyaya" stands for Justice, and "Alamban" means 
          Hope or Pillar.
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
