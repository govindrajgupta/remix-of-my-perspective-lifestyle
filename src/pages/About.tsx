import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Target, Eye } from "lucide-react";
import logo from "@/assets/nyaya-alamban-logo.png";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated-text";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us"
        url="/about"
        description="Learn about Nyaya Alamban, founded by Social Worker Mr. Raghavenddhiraa. We provide legal assistance and promote alternative dispute resolution. Nyaya means Justice, Alamban means Hope."
        keywords="about Nyaya Alamban, Mr. Raghavenddhiraa, legal aid NGO, alternative dispute resolution, justice India, social worker"
      />
      <NavHeader />
      
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Nyaya Alamban
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A pillar of hope for justice, founded on dialogue, fairness, 
              and equal access to legal assistance.
            </p>
          </FadeIn>
        </section>

        {/* Story Section */}
        <section className="py-12 md:py-16">
          <ScrollReveal>
            <motion.div 
              className="bg-muted rounded-[2.5rem] p-8 md:p-12 lg:p-16"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <motion.div 
                  className="md:w-1/3"
                  whileHover={{ rotate: 3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img 
                    src={logo} 
                    alt="Nyaya Alamban Logo" 
                    loading="lazy"
                    decoding="async"
                    className="w-full max-w-[250px] mx-auto"
                  />
                </motion.div>
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
            </motion.div>
          </ScrollReveal>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-16">
          <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <StaggerItem>
              <motion.div 
                className="bg-muted rounded-[2rem] p-8 h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-background flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Target className="w-7 h-7" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Provide accessible legal assistance, reduce court pendency, 
                  and support undertrial prisoners through comprehensive legal aid programs.
                </p>
              </motion.div>
            </StaggerItem>
            
            <StaggerItem>
              <motion.div 
                className="bg-muted rounded-[2rem] p-8 h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-background flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Eye className="w-7 h-7" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A society where justice is accessible to all and disputes 
                  are resolved amicably through dialogue and mutual understanding.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;