import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Message Sent", description: "Thank you for contacting us." });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <main>
        <section className="section-padding trust-gradient">
          <div className="container-wide text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">Reach out for legal assistance or queries.</p>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Send a Message</h2>
              <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
              <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Email" />
              <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
              <Textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Your Message" />
              <Button type="submit" disabled={isSubmitting}><Send className="w-4 h-4 mr-2" />{isSubmitting ? "Sending..." : "Send"}</Button>
            </form>
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              <div className="flex items-start gap-4"><div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div><div><h4 className="font-semibold">Email</h4><p className="text-muted-foreground">contact@nyayaalamban.org</p></div></div>
              <div className="flex items-start gap-4"><div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div><div><h4 className="font-semibold">Phone</h4><p className="text-muted-foreground">+91 XXXXX XXXXX</p></div></div>
              <div className="flex items-start gap-4"><div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div><div><h4 className="font-semibold">Address</h4><p className="text-muted-foreground">India</p></div></div>
              <div className="bg-muted rounded-lg h-48 flex items-center justify-center"><p className="text-muted-foreground text-sm">Map placeholder</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
