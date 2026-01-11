import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Philosophy from "@/components/Philosophy";
import Approach from "@/components/Approach";
import RecentBlogs from "@/components/RecentBlogs";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <main className="pt-20">
        <Hero />
        <AboutIntro />
        <Philosophy />
        <Approach />
        <RecentBlogs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
