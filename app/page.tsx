import Image from "next/image";
import Navbar from "./components/Stack/Navbar";
import AboutUs from "./components/Stack/AboutUs";
import Recommend from "./components/Stack/Recommend";
import Footer from "./components/Stack/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutUs />
      <Recommend />
      <Footer />
      
    </main>
  );
}
