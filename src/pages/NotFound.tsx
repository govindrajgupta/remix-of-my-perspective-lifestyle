import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center py-20">
          <h1 className="font-serif text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-serif text-2xl text-primary mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2"><Home className="w-4 h-4" />Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
