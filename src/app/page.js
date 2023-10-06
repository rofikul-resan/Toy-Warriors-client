import AboutStats from "@/components/AboutStats";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Banner />
      <AboutStats />
      <Footer />
    </main>
  );
}
