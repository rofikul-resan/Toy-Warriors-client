import NavigationBar from "@/components/NavigationBar";
import Banner from "./_homeComponents/Banner/Banner";
import HomeToyCategory from "./_homeComponents/HomeToyCategory";
import AboutStats from "./_homeComponents/AboutStats";
import GallerySection from "./_homeComponents/GallerySection";
import ContactUsSection from "./_homeComponents/ContactUsSection";
import Testimonial from "./_homeComponents/Testimonial/Testimonail";
import Footer from "@/components/Footer";
import ToyByCategory from "./_homeComponents/toyByCategory/ToyByCategory";

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-50">
        <NavigationBar />
      </nav>
      <main>
        <Banner />
        <HomeToyCategory />
        <AboutStats />
        <GallerySection />
        <ToyByCategory />
        <ContactUsSection />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}
