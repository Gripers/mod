import dynamic from 'next/dynamic';

import { carouselConfig } from '@/config/carousel.config';
import { sneakersDB } from '@/db/sneakers.db';
import ProductItem from '@/components/item/product-item/ProductItem';

const ReactOwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const Sneakers = () => {
  return (
    <section>
      <h2>СНИКЕРСЫ</h2>
      <ReactOwlCarousel {...carouselConfig}>
        {sneakersDB.map((sneaker) => (
          <ProductItem key={sneaker.id} item={sneaker} />
        ))}
      </ReactOwlCarousel>
    </section>
  );
};

export default Sneakers;
