import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Philosophy from "@/components/Philosophy";
import Approach from "@/components/Approach";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <AboutIntro />
        <Philosophy />
        <Approach />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
