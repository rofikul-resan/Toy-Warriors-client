import NavigationBar from "@/components/NavigationBar";
import Banner from "./_homeComponents/Banner/Banner";
import HomeToyCategory from "./_homeComponents/HomeToyCategory";
import AboutStats from "./_homeComponents/AboutStats";
import GallerySection from "./_homeComponents/GallerySection";
import ContactUsSection from "./_homeComponents/ContactUsSection";
import Testimonial from "./_homeComponents/Testimonial/Testimonail";
import Footer from "@/components/Footer";

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
