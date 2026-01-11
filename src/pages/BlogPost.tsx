import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Loader2, Eye, Share2, Clock, Tag } from "lucide-react";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CommentSection from "@/components/CommentSection";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = useBlogPost(id || '');
  const { toast } = useToast();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url,
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied to clipboard!" });
    }
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

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
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>

        {/* Article Header */}
        <header className="mb-10 animate-fade-in">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="px-3 py-1">
              <Tag className="w-3 h-3 mr-1.5" />
              {post.category || 'General'}
            </Badge>
            {post.views > 0 && (
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                {post.views} views
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-border">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-xs">Author</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{estimateReadTime(post.content)} min read</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full"
              onClick={handleShare}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <figure className="mb-10 animate-scale-in">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img 
                src={post.featured_image} 
                alt={post.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          </figure>
        )}

        {/* Featured Video */}
        {post.video_url && (
          <figure className="mb-10 animate-scale-in">
            <div className="rounded-2xl overflow-hidden border border-border bg-black">
              {isYouTubeUrl(post.video_url) ? (
                <iframe
                  src={getYouTubeEmbedUrl(post.video_url) || ''}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video 
                  src={post.video_url} 
                  controls
                  className="w-full aspect-video"
                />
              )}
            </div>
          </figure>
        )}

        {/* Content */}
        <article className="prose prose-lg max-w-none animate-fade-in">
          <div 
            className="text-foreground leading-relaxed text-lg whitespace-pre-wrap"
            style={{ lineHeight: '1.8' }}
          >
            {post.content.split('\n').map((paragraph, index) => (
              paragraph.trim() ? (
                <p key={index} className="mb-6">{paragraph}</p>
              ) : null
            ))}
          </div>
        </article>

        {/* Tags/Category Footer */}
        <div className="mt-12 pt-8 border-t border-border flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Filed under:</span>
          <Badge variant="secondary">{post.category || 'General'}</Badge>
        </div>

        {/* Comments Section */}
        <CommentSection postId={post.id} />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
