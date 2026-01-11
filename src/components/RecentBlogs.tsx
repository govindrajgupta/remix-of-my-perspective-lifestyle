import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Loader2, BookOpen } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const RecentBlogs = () => {
  const { posts, loading, error } = useBlogPosts(true);
  const recentPosts = posts.slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-wide">
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        </div>
      </section>
    );
  }

  if (error || recentPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative">
        {/* Header */}
        <ScrollReveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Latest Updates
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              From Our Journal
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Stay informed about legal rights and justice initiatives
            </p>
          </div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full px-6 group"
            >
              <Link to="/blog" className="flex items-center gap-2">
                View All Articles
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recentPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100} direction="up">
              <Link to={`/blog/${post.id}`} className="group block h-full">
                <motion.article 
                  className="h-full bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-xl hover:border-primary/20"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-muted overflow-hidden">
                    {post.featured_image ? (
                      <img 
                        src={post.featured_image} 
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                        <BookOpen className="w-12 h-12 text-muted-foreground/30" />
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <Badge 
                      className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground"
                    >
                      {post.category || 'General'}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.created_at)}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA for Mobile */}
        <ScrollReveal delay={300} className="mt-10 text-center sm:hidden">
          <Button asChild className="rounded-full px-8">
            <Link to="/blog" className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RecentBlogs;
