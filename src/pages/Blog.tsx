import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Loader2, Play, Eye, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Badge } from "@/components/ui/badge";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper to check if URL is a YouTube link
const isYouTubeUrl = (url: string) => {
  return url?.includes('youtube.com') || url?.includes('youtu.be');
};

// Get YouTube thumbnail from URL
const getYouTubeThumbnail = (url: string) => {
  if (!url) return null;
  let videoId = '';
  if (url.includes('youtube.com/watch')) {
    videoId = new URL(url).searchParams.get('v') || '';
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
  } else if (url.includes('youtube.com/embed/')) {
    videoId = url.split('embed/')[1]?.split('?')[0] || '';
  }
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};

// Media Card Component for proper image/video display
const MediaCard = ({ post, size = 'regular' }: { post: any; size?: 'featured' | 'regular' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasVideo = post.video_url && post.video_url.trim() !== '';
  const isYouTube = hasVideo && isYouTubeUrl(post.video_url);
  
  const getThumbnail = () => {
    if (post.featured_image) return post.featured_image;
    if (isYouTube) return getYouTubeThumbnail(post.video_url);
    return null;
  };

  const thumbnail = getThumbnail();
  const containerClass = size === 'featured' 
    ? "relative min-h-64 lg:min-h-80 overflow-hidden bg-muted"
    : "relative bg-muted overflow-hidden min-h-52";

  return (
    <div 
      className={containerClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {hasVideo && !isYouTube && isHovered ? (
        <video
          src={post.video_url}
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        />
      ) : thumbnail ? (
        <img 
          src={thumbnail} 
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

      {hasVideo && (
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium z-10">
          <Play className="w-3 h-3 fill-current" />
          Video
        </div>
      )}
      
      <Badge 
        className={size === 'featured' 
          ? "absolute top-6 left-6 bg-primary text-primary-foreground"
          : "absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground"
        }
      >
        {post.category || (size === 'featured' ? 'Featured' : 'General')}
      </Badge>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const Blog = () => {
  const { posts, loading, error } = useBlogPosts(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const cats = posts.map(post => post.category || 'General');
    const uniqueCats = [...new Set(cats)];
    return ['All', ...uniqueCats.sort()];
  }, [posts]);

  // Filter posts by selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return posts;
    return posts.filter(post => (post.category || 'General') === selectedCategory);
  }, [posts, selectedCategory]);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Hero Section */}
        <section className="py-16 md:py-24 text-center animate-fade-in">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm">
            <TrendingUp className="w-3 h-3 mr-2" />
            Latest Insights
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            The Journal
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Stay informed about legal rights, justice initiatives, and 
            updates from Nyaya Alamban.
          </p>
        </section>

        {/* Category Filter Tabs */}
        {!loading && !error && posts.length > 0 && (
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                  {selectedCategory === category && (
                    <motion.span
                      className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs rounded-full bg-primary-foreground/20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      {category === 'All' ? posts.length : filteredPosts.length}
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="pb-20">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-muted/50 rounded-3xl">
              <p className="text-muted-foreground mb-4">Unable to load posts.</p>
              <p className="text-sm text-destructive">{error}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 bg-muted/50 rounded-3xl">
              <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <motion.div 
              className="text-center py-20 bg-muted/50 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <BookOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No posts found in "{selectedCategory}"</p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-primary font-medium hover:underline"
              >
                View all posts
              </button>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Featured Post - Hero Style */}
                {featuredPost && (
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="block group mb-16"
                  >
                    <article className="relative overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <MediaCard post={featuredPost} size="featured" />

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {formatDate(featuredPost.created_at)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <User className="w-4 h-4" />
                              {featuredPost.author}
                            </span>
                            {featuredPost.views > 0 && (
                              <span className="flex items-center gap-1.5">
                                <Eye className="w-4 h-4" />
                                {featuredPost.views}
                              </span>
                            )}
                          </div>
                          
                          <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-3">
                            {featuredPost.title}
                          </h2>
                          
                          <p className="text-muted-foreground text-lg leading-relaxed mb-6 line-clamp-3">
                            {featuredPost.excerpt}
                          </p>
                          
                          <div className="inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-4 transition-all">
                            Read Full Article
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                )}

                {/* Regular Posts Grid */}
                {regularPosts.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link 
                          to={`/blog/${post.id}`}
                          className="group block h-full"
                        >
                          <article className="h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                            <MediaCard post={post} size="regular" />
                            
                            <div className="p-6">
                              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {formatDate(post.created_at)}
                                </span>
                                <span>•</span>
                                <span>{post.author}</span>
                              </div>
                              
                              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              
                              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                                {post.excerpt}
                              </p>
                              
                              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                                Read More
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </div>
                          </article>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
