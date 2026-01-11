const AboutIntro = () => {
  return (
    <section className="section-padding surface-soft">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            About Nyaya Alamban
          </h2>
          
          <div className="bg-background rounded-lg p-8 md:p-12 shadow-sm border border-border">
            <p className="text-foreground leading-relaxed mb-6">
              <strong className="text-primary">Nyaya Alamban</strong> was founded by Social Worker 
              <strong className="text-primary"> Mr. Raghavenddhiraa</strong> with a vision to provide 
              legal assistance to people in need and prevent unnecessary litigation through constructive dialogue.
            </p>
            
            <p className="text-foreground leading-relaxed mb-6">
              The name carries deep meaning: <strong className="text-primary">"Nyaya"</strong> stands for 
              <em> Justice</em>, and <strong className="text-primary">"Alamban"</strong> means 
              <em> Hope</em> or <em>Pillar</em>. Together, we represent a pillar of hope for justice.
            </p>
            
            <p className="text-foreground leading-relaxed mb-6">
              Our core belief is simple yet powerful: <strong className="text-primary">"Trust in Law"</strong>. 
              We work with an inclusive approach, serving all individuals irrespective of religion, caste, 
              language, or gender.
            </p>
            
            <div className="mt-8 p-6 bg-saffron-light rounded-lg border-l-4 border-secondary">
              <p className="text-foreground italic text-lg">
                "Justice delayed is justice denied. We strive to bring timely resolution and 
                restore faith in the legal system."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
