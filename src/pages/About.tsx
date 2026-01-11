import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Target, Eye } from "lucide-react";
import logo from "@/assets/nyaya-alamban-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down">
            About Nyaya Alamban
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up stagger-1">
            A pillar of hope for justice, founded on dialogue, fairness, 
            and equal access to legal assistance.
          </p>
        </section>

        {/* Story Section */}
        <section className="py-12 md:py-16">
          <div className="bg-muted rounded-[2.5rem] p-8 md:p-12 lg:p-16 animate-scale-in">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/3">
                <img 
                  src={logo} 
                  alt="Nyaya Alamban Logo" 
                  className="w-full max-w-[250px] mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  <strong>Nyaya Alamban</strong> was founded by Social Worker 
                  <strong> Mr. Raghavenddhiraa</strong> to provide legal assistance 
                  and prevent unnecessary litigation through constructive dialogue.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  <strong>"Nyaya"</strong> means <em>Justice</em> and <strong>"Alamban"</strong> means 
                  <em> Hope/Pillar</em>. Together, we represent a pillar of hope for justice.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our guiding principle: <strong>"Trust in Law"</strong>. We serve all individuals 
                  irrespective of religion, caste, language, or gender.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-muted rounded-[2rem] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Provide accessible legal assistance, reduce court pendency, 
                and support undertrial prisoners through comprehensive legal aid programs.
              </p>
            </div>
            
            <div className="bg-muted rounded-[2rem] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up stagger-1">
              <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A society where justice is accessible to all and disputes 
                are resolved amicably through dialogue and mutual understanding.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
