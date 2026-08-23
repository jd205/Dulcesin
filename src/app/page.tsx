import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <About />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
