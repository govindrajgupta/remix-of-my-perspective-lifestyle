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
      
      <main>
        {/* Hero Section */}
        <section className="section-padding trust-gradient">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                Blog & Articles
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay informed about legal rights, justice initiatives, and 
                updates from Nyaya Alamban.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {staticPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="card-professional overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-muted flex items-center justify-center">
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
                    <h2 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    {/* Read More */}
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-secondary transition-colors"
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
              <div className="bg-saffron-light rounded-lg p-6 border border-secondary/20">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-primary">Note:</strong> Blog posts are currently 
                  displayed as static content. Connect to Lovable Cloud to enable the 
                  full CMS with admin dashboard for creating, editing, and managing posts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
