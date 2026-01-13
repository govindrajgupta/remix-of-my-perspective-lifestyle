import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Philosophy from "@/components/Philosophy";
import Approach from "@/components/Approach";
import RecentBlogs from "@/components/RecentBlogs";
import CallToAction from "@/components/CallToAction";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        url="/"
        description="Nyaya Alamban provides free legal assistance and promotes alternative dispute resolution. Founded by Social Worker Mr. Raghavenddhiraa. Justice for All."
        keywords="Nyaya Alamban, legal aid, free legal assistance, alternative dispute resolution, ADR, justice, legal help, NGO, social justice, legal services India"
      />
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
