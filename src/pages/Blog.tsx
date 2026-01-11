import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Loader2, Play, Eye, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const { posts, loading, error } = useBlogPosts(true);

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          ) : (
            <>
              {/* Featured Post - Hero Style */}
              {featuredPost && (
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="block group mb-16"
                >
                  <article className="relative overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image/Video Side */}
                      <div className="relative h-72 lg:h-[500px] overflow-hidden bg-muted">
                        {featuredPost.video_url ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            {featuredPost.featured_image && (
                              <img 
                                src={featuredPost.featured_image} 
                                alt={featuredPost.title}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            )}
                            <div className="relative z-10 w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-8 h-8 text-primary ml-1" />
                            </div>
                          </div>
                        ) : featuredPost.featured_image ? (
                          <img 
                            src={featuredPost.featured_image} 
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            Featured Image
                          </div>
                        )}
                        
                        {/* Category Badge */}
                        <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground">
                          {featuredPost.category || 'Featured'}
                        </Badge>
                      </div>

                      {/* Content Side */}
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
                    <Link 
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="group"
                    >
                      <article 
                        className="h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 animate-fade-in"
                        style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                      >
                        {/* Image */}
                        <div className="relative h-52 bg-muted overflow-hidden">
                          {post.video_url && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-6 h-6 text-primary ml-0.5" />
                              </div>
                            </div>
                          )}
                          {post.featured_image ? (
                            <img 
                              src={post.featured_image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                              No Image
                            </div>
                          )}
                          
                          {/* Category */}
                          <Badge 
                            variant="secondary" 
                            className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
                          >
                            {post.category || 'General'}
                          </Badge>
                        </div>
                        
                        {/* Content */}
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
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
