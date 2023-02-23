import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import Section from '@/components/Section/Section';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <Section />
        <Footer />
      </main>
    </>
  );
}
