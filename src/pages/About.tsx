import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Target, Eye, Users, Heart } from "lucide-react";
import logo from "@/assets/nyaya-alamban-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <main>
        <section className="section-padding trust-gradient">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">About Nyaya Alamban</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">A pillar of hope for justice, founded on dialogue, fairness, and equal access to legal assistance.</p>
            </div>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3"><img src={logo} alt="Nyaya Alamban Logo" className="w-full max-w-[250px] mx-auto" /></div>
              <div className="md:w-2/3">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-foreground leading-relaxed mb-4"><strong className="text-primary">Nyaya Alamban</strong> was founded by Social Worker <strong className="text-primary">Mr. Raghavenddhiraa</strong> to provide legal assistance and prevent unnecessary litigation through constructive dialogue.</p>
                <p className="text-foreground leading-relaxed mb-4"><strong>"Nyaya"</strong> means <em>Justice</em> and <strong>"Alamban"</strong> means <em>Hope/Pillar</em>. Our guiding principle: <strong className="text-primary">"Trust in Law"</strong>.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding surface-soft">
          <div className="container-wide max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-professional p-8">
              <Target className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground">Provide accessible legal assistance, reduce court pendency, and support undertrial prisoners.</p>
            </div>
            <div className="card-professional p-8">
              <Eye className="w-7 h-7 text-secondary mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground">A society where justice is accessible to all and disputes are resolved amicably.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
