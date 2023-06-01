import dynamic from 'next/dynamic';

import { carouselConfig } from '@/config/carousel.config';
import { brandsDB } from '@/db/brands.db';
import BrandItem from '@/components/item/brand-item/BrandItem';

const ReactOwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const Brands = () => {
  return (
    <section>
      <h2>БРЕНДЫ</h2>
      <ReactOwlCarousel {...carouselConfig} items={5} loop autoWidth>
        {brandsDB.map((brand) => (
          <BrandItem key={brand.id} brand={brand} />
        ))}
      </ReactOwlCarousel>
    </section>
  );
};

export default Brands;
