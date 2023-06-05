import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navbar";
import Presentation from "@/components/Presentation";
import PresentationText from "@/components/PresentationText";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main>
        <Presentation />
        <PresentationText />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
