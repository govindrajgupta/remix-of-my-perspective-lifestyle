import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated-text";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Message Sent", description: "Thank you for contacting us." });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "contact@nyayaalamban.org" },
    { icon: Phone, title: "Phone", value: "+91 XXXXX XXXXX" },
    { icon: MapPin, title: "Address", value: "India" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us"
        url="/contact"
        description="Contact Nyaya Alamban for free legal assistance, consultation, or queries about our services. Reach out via email, phone, or our contact form."
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
              className="bg-muted rounded-[2.5rem] p-8 md:p-12 lg:p-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="Your Name"
                        className="rounded-xl bg-background border-0 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </motion.div>
                    <Input 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="Email Address"
                      className="rounded-xl bg-background border-0 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                    <Input 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      placeholder="Subject"
                      className="rounded-xl bg-background border-0 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                    <Textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows={5} 
                      placeholder="Your Message"
                      className="rounded-xl bg-background border-0 resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="rounded-full px-8 py-6 transition-all"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <StaggerContainer staggerDelay={0.1} className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <StaggerItem key={index}>
                        <motion.div 
                          className="flex items-start gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                          >
                            <item.icon className="w-5 h-5" />
                          </motion.div>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-muted-foreground">{item.value}</p>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  {/* Map Placeholder */}
                  <motion.div 
                    className="mt-8 bg-background rounded-2xl h-48 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <p className="text-muted-foreground text-sm">Map placeholder</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;