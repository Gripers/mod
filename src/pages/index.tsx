import Header from '@/components/header/Header';
import Banner from '@/components/sections/banner/Banner';
import Brands from '@/components/sections/brands/Brands';
import Catalog from '@/components/sections/catalog/Catalog';
import Services from '@/components/sections/services/Services';
import Sneakers from '@/components/sections/sneakers/Sneakers';

const css = `
  .container section {
    width: 95%;
    max-width: 1280px;
    margin: 26px auto;
  }
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <div className='container'>
        <style>{css}</style>
        <Catalog />
        <Brands />
        <Banner />
        <Sneakers />
        <Services />
      </div>
    </>
  );
}
