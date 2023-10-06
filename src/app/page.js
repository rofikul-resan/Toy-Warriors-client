"use client";
import AboutStats from "@/components/AboutStats";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log(router.state);
  return (
    <main>
      <NavigationBar />
      <Banner />
      <AboutStats />
      <Footer />
    </main>
  );
}
