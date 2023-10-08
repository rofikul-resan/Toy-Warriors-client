import AboutStats from "@/components/AboutStats";
import Banner from "@/components/Banner/Banner";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HomeToyCategory from "@/components/HomeToyCategory";
import NavigationBar from "@/components/NavigationBar";
import Testimonial from "@/components/Testimonial/Testimonail";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Banner />
      <HomeToyCategory />
      <AboutStats />
      <GallerySection />
      <ContactUsSection />
      <Testimonial />
      <Footer />
    </main>
  );
}
