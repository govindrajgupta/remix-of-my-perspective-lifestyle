import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Temporary static blog posts until backend is connected
const staticPosts = [
  {
    id: "1",
    title: "Understanding Your Legal Rights as a Citizen",
    excerpt: "A comprehensive guide to fundamental rights every Indian citizen should know about and how to protect them.",
    featured_image: null,
    created_at: "2025-01-10",
    author: "Admin",
  },
  {
    id: "2",
    title: "Alternative Dispute Resolution: A Better Path",
    excerpt: "Explore how mediation and dialogue can resolve conflicts more effectively than traditional litigation.",
    featured_image: null,
    created_at: "2025-01-08",
    author: "Admin",
  },
  {
    id: "3",
    title: "Legal Aid for Undertrial Prisoners",
    excerpt: "Learn about the legal assistance available for undertrial prisoners and how Nyaya Alamban is making a difference.",
    featured_image: null,
    created_at: "2025-01-05",
    author: "Admin",
  },
];

const Blog = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {staticPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="bg-muted rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: 0 }}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-background/50 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Featured Image</div>
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
                  <h2 className="text-xl font-bold mb-3 group-hover:opacity-70 transition-opacity">
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
          
          {/* Info about CMS */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="bg-muted rounded-2xl p-6">
              <p className="text-muted-foreground text-sm">
                <strong>Note:</strong> Blog posts are currently 
                displayed as static content. Connect to Lovable Cloud to enable the 
                full CMS with admin dashboard for creating, editing, and managing posts.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
