import Contact from "@/components/contact";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navbar";
import Presentation from "@/components/presentation";
import PresentationText from "@/components/presentationText";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="p-20">
        <Presentation />
        <PresentationText />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
