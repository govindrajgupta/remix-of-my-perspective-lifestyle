import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Scale, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedWords } from "@/components/ui/animated-text";

const Hero = () => {
  const stats = [
    { icon: Shield, value: "10+", label: "Years of Service" },
    { icon: Users, value: "5000+", label: "Cases Resolved" },
    { icon: Scale, value: "100%", label: "Commitment" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container-wide relative py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-medium">Justice for All</span>
              </div>
            </FadeIn>
            
            {/* Heading */}
            <div className="space-y-4 md:space-y-6">
              <FadeIn delay={0.2}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
                  <AnimatedWords text="A Pillar of" delay={0.3} />
                  <span className="text-primary relative inline-block mx-1 sm:mx-2">
                    <AnimatedWords text="Hope" delay={0.5} />
                    <motion.svg 
                      className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" 
                      viewBox="0 0 100 8" 
                      preserveAspectRatio="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <motion.path 
                        d="M0 7 Q 25 0, 50 4 T 100 3" 
                        fill="none" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      />
                    </motion.svg>
                  </span>
                  <AnimatedWords text="for Justice" delay={0.6} />
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Committed to legal assistance and alternative dispute resolution. 
                  We believe in dialogue over dispute, and hope through law.
                </p>
              </FadeIn>
            </div>

            {/* CTAs */}
            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-xl group"
                  >
                    <Link to="/about" className="flex items-center gap-2">
                      Learn About Us
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 py-6 text-base font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg"
                  >
                    <Link to="/contact">Get Free Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.6}>
              <StaggerContainer staggerDelay={0.15} initialDelay={0.7} className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8 border-t border-border/50">
                {stats.map((stat, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="text-center lg:text-left group cursor-default"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 mb-1">
                        <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{stat.value}</span>
                      </div>
                      <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          </div>

          {/* Right - Image */}
          <FadeIn direction="right" delay={0.3}>
            <div className="relative">
              {/* Glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
                  alt="Justice and legal aid"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                
                {/* Decorative corner accent */}
                <motion.div 
                  className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-accent/60 rounded-tr-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-accent/60 rounded-bl-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                />
              </motion.div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-card px-6 py-4 rounded-2xl shadow-xl border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <p className="text-sm font-medium text-muted-foreground">Trusted by</p>
                <p className="text-2xl font-bold text-primary">1000+ Families</p>
              </motion.div>

              {/* Secondary floating element */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <span className="text-sm font-bold">Free Consultation</span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;