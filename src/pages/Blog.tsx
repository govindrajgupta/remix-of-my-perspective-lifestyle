import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const Blog = () => {
  const { posts, loading, error } = useBlogPosts(true);

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down">
            Blog & Articles
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up stagger-1">
            Stay informed about legal rights, justice initiatives, and 
            updates from Nyaya Alamban.
          </p>
        </section>

        {/* Blog Posts */}
        <section className="py-8 md:py-12">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">Unable to load posts. Please check your database setup.</p>
              <p className="text-sm text-destructive">{error}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="bg-muted rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: 0 }}
                >
                  {/* Featured Image */}
                  <div className="h-48 bg-background/50 flex items-center justify-center overflow-hidden">
                    {post.featured_image ? (
                      <img 
                        src={post.featured_image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-muted-foreground text-sm">Featured Image</div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.created_at).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    {/* Read More */}
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 font-medium text-sm hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
