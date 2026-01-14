import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/animated-text";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us"
        url="/contact"
        description="Contact Nyaya Alamban for free legal assistance, consultation, or queries about our services. Reach out via email."
        keywords="contact Nyaya Alamban, legal help contact, free legal consultation, legal aid contact India"
      />
      <NavHeader />
      
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Reach out for legal assistance or any queries about our services.
            </p>
          </FadeIn>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16">
          <ScrollReveal>
            <motion.div 
              className="bg-muted rounded-[2.5rem] p-8 md:p-12 lg:p-16 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <motion.div 
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Mail className="w-10 h-10 text-primary" />
                </motion.div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-2">Send us your queries</h2>
                  <p className="text-muted-foreground mb-6">
                    For legal assistance or any questions, please email us at:
                  </p>
                </div>
                
                <motion.a 
                  href="mailto:info@nyaya-alamban.org"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  info@nyaya-alamban.org
                </motion.a>
                
                <p className="text-sm text-muted-foreground mt-6">
                  We will respond to your query as soon as possible.
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
