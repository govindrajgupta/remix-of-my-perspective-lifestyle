import { useState } from "react";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost } from "@/hooks/useBlogPosts";
import { BlogPost } from "@/lib/supabase";
import { Plus, Edit, Trash2, Eye, EyeOff, Loader2, Video, Image, Calendar, User, LayoutDashboard, FileText } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import VideoUpload from "@/components/VideoUpload";
import PasswordGate from "@/components/PasswordGate";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CATEGORIES = [
  "General",
  "Legal Rights",
  "Justice",
  "News",
  "Updates",
  "Case Studies",
  "Opinion",
];

const Admin = () => {
  const { toast } = useToast();
  const { posts, loading, refetch } = useBlogPosts(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    featured_image: "",
    video_url: "",
    category: "General",
    views: 0,
    author: "Admin",
    published: false,
  });

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      featured_image: "",
      video_url: "",
      category: "General",
      views: 0,
      author: "Admin",
      published: false,
    });
    setSelectedPost(null);
  };

  const openCreateDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const openEditDialog = (post: BlogPost) => {
    setSelectedPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      featured_image: post.featured_image || "",
      video_url: post.video_url || "",
      category: post.category || "General",
      views: post.views || 0,
      author: post.author,
      published: post.published,
    });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDeleteDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (selectedPost) {
        await updateBlogPost(selectedPost.id, {
          ...formData,
          featured_image: formData.featured_image || null,
          video_url: formData.video_url || null,
        });
        toast({ title: "Post updated successfully" });
      } else {
        await createBlogPost({
          ...formData,
          featured_image: formData.featured_image || null,
          video_url: formData.video_url || null,
        });
        toast({ title: "Post created successfully" });
      }
      setIsDialogOpen(false);
      resetForm();
      refetch();
    } catch (error: any) {
      toast({ 
        title: "Error", 
        description: error.message,
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedPost) return;
    
    try {
      await deleteBlogPost(selectedPost.id);
      toast({ title: "Post deleted successfully" });
      setIsDeleteDialogOpen(false);
      setSelectedPost(null);
      refetch();
    } catch (error: any) {
      toast({ 
        title: "Error", 
        description: error.message,
        variant: "destructive" 
      });
    }
  };

  const togglePublished = async (post: BlogPost) => {
    try {
      await updateBlogPost(post.id, { published: !post.published });
      toast({ 
        title: post.published ? "Post unpublished" : "Post published" 
      });
      refetch();
    } catch (error: any) {
      toast({ 
        title: "Error", 
        description: error.message,
        variant: "destructive" 
      });
    }
  };

  const publishedCount = posts.filter(p => p.published).length;
  const draftCount = posts.filter(p => !p.published).length;

  return (
    <PasswordGate>
    <div className="min-h-screen bg-background">
      <NavHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dashboard Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <LayoutDashboard className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Content Dashboard</h1>
          </div>
          <p className="text-muted-foreground">Manage your blog posts and media</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Posts</p>
                <p className="text-3xl font-bold">{posts.length}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <FileText className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Published</p>
                <p className="text-3xl font-bold text-green-600">{publishedCount}</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Drafts</p>
                <p className="text-3xl font-bold text-yellow-600">{draftCount}</p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                <EyeOff className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold">All Posts</h2>
          <Button onClick={openCreateDialog} className="rounded-full shadow-lg">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-muted/50 rounded-3xl border-2 border-dashed border-border">
            <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <p className="text-muted-foreground mb-4 text-lg">No blog posts yet</p>
            <Button onClick={openCreateDialog} size="lg" className="rounded-full">
              <Plus className="w-4 h-4 mr-2" />
              Create your first post
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 group"
              >
                {/* Image Preview */}
                <div className="relative h-40 bg-muted overflow-hidden">
                  {post.featured_image ? (
                    <img 
                      src={post.featured_image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : post.video_url ? (
                    <div className="w-full h-full flex items-center justify-center bg-black/10">
                      <Video className="w-12 h-12 text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image className="w-12 h-12 text-muted-foreground/50" />
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <Badge 
                    className={`absolute top-3 right-3 ${
                      post.published 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}
                  >
                    {post.published ? 'Published' : 'Draft'}
                  </Badge>

                  {/* Video Indicator */}
                  {post.video_url && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        <Video className="w-3 h-3 mr-1" />
                        Video
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category || 'General'}
                    </Badge>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.created_at).toLocaleDateString('en-IN')}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => togglePublished(post)}
                        title={post.published ? 'Unpublish' : 'Publish'}
                      >
                        {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => openEditDialog(post)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => openDeleteDialog(post)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedPost ? 'Edit Post' : 'Create New Post'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="Enter post title"
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Excerpt</label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    required
                    rows={2}
                    placeholder="Brief description for post previews"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Content</label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                    rows={12}
                    placeholder="Write your full blog post content here..."
                    className="font-mono text-sm"
                  />
                </div>
              </TabsContent>

              <TabsContent value="media" className="space-y-6">
                <ImageUpload
                  value={formData.featured_image}
                  onChange={(url) => setFormData({ ...formData, featured_image: url })}
                />
                <VideoUpload
                  value={formData.video_url}
                  onChange={(url) => setFormData({ ...formData, video_url: url })}
                />
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Author</label>
                  <Input
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    required
                    placeholder="Author name"
                  />
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="rounded w-5 h-5"
                  />
                  <label htmlFor="published" className="font-medium cursor-pointer">
                    Publish immediately
                  </label>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end gap-3 pt-4 border-t border-border">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="min-w-[120px]">
                {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {selectedPost ? 'Update Post' : 'Create Post'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{selectedPost?.title}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <Footer />
    </div>
    </PasswordGate>
  );
};

export default Admin;
