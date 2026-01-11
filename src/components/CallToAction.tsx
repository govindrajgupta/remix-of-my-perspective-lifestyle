import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/animated-text";
import ScrollReveal from "./ScrollReveal";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container-wide px-4">
        <ScrollReveal>
          <motion.div 
            className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-deep-blue-light rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center group"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute top-0 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-accent/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-accent/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
              animate={{ 
                scale: [1.3, 1, 1.3],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary-foreground/5 rounded-full blur-2xl" />
            
            {/* Floating particles - hidden on mobile */}
            <motion.div 
              className="absolute top-10 left-20 w-2 h-2 bg-accent rounded-full hidden sm:block"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-20 right-32 w-3 h-3 bg-accent/60 rounded-full hidden sm:block"
              animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-16 left-1/4 w-2 h-2 bg-primary-foreground/40 rounded-full hidden sm:block"
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            
            <div className="relative space-y-6 sm:space-y-8 max-w-2xl mx-auto">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 mx-auto"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
              </motion.div>
              
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Need Legal Help?
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto leading-relaxed px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                We're here to help you navigate legal challenges with compassion and expertise. 
                Get in touch for a free consultation.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 sm:px-10 py-6 sm:py-7 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-2xl group/btn"
                  >
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                      Contact Us Today
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    asChild
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-6 sm:px-10 py-6 sm:py-7 text-sm sm:text-base md:text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-xl group/btn"
                  >
                    <Link to="/about" className="flex items-center justify-center gap-2">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                      Learn About Our Work
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToAction;