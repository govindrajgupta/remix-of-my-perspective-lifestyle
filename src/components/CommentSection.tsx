import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useComments, addComment } from '@/hooks/useComments';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, Send, Loader2, User } from 'lucide-react';

interface CommentSectionProps {
  postId: string;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const { comments, loading, refetch } = useComments(postId);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    author_name: '',
    author_email: '',
    content: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.author_name.trim() || !formData.content.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name and comment",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await addComment({
        post_id: postId,
        author_name: formData.author_name.trim(),
        author_email: formData.author_email.trim(),
        content: formData.content.trim(),
      });

      toast({ title: "Comment posted successfully!" });
      setFormData({ author_name: '', author_email: '', content: '' });
      refetch();
    } catch (error: any) {
      const msg = error?.message || "Failed to post comment";
      const isRls = typeof msg === 'string' && msg.toLowerCase().includes('row-level security');

      toast({
        title: "Error",
        description: isRls
          ? "Comments are blocked by the backend security policy. Enable public comment inserts (I can share the exact SQL) and then try again."
          : msg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section className="mt-16 pt-12 border-t border-border">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-primary/10 rounded-full">
          <MessageSquare className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">
          Comments {comments.length > 0 && `(${comments.length})`}
        </h2>
      </div>

      {/* Comment Form */}
      <div className="bg-muted/50 rounded-2xl p-6 mb-10">
        <h3 className="text-lg font-semibold mb-4">Leave a Reply</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Name *</label>
              <Input
                value={formData.author_name}
                onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email (optional)</label>
              <Input
                type="email"
                value={formData.author_email}
                onChange={(e) => setFormData({ ...formData, author_email: e.target.value })}
                placeholder="your@email.com"
                className="bg-background"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Comment *</label>
            <Textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Share your thoughts..."
              rows={4}
              required
              className="bg-background resize-none"
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="rounded-full px-6">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Posting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Post Comment
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Comments List */}
      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <article 
              key={comment.id} 
              className="bg-card border border-border rounded-2xl p-6 animate-fade-in"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-semibold">{comment.author_name}</span>
                    <span className="text-muted-foreground text-sm">•</span>
                    <time className="text-sm text-muted-foreground">
                      {formatDate(comment.created_at)}
                    </time>
                  </div>
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {comment.content}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default CommentSection;
