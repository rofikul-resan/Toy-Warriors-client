import AboutStats from "@/components/AboutStats";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HomeToyCategory from "@/components/HomeToyCategory";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Banner />
      <AboutStats />
      <HomeToyCategory />
      <GallerySection />
      <Footer />
    </main>
  );
}
