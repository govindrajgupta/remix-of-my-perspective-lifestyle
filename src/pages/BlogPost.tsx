import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Loader2 } from "lucide-react";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = useBlogPost(id || '');

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <NavHeader />
        <div className="flex justify-center items-center py-32">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <NavHeader />
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="rounded-[2rem] overflow-hidden mb-8">
            <img 
              src={post.featured_image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-down">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
          <span className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {new Date(post.created_at).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-2">
            <User className="w-5 h-5" />
            {post.author}
          </span>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-foreground leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
