import dynamic from 'next/dynamic';

import { catalogDB } from '@/db/catalog.db';
import { carouselConfig } from '@/config/carousel.config';
import CatalogItem from '@/components/item/catalog-item/CatalogItem';

const ReactOwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const Catalog = () => {
  return (
    <section>
      <h2>КАТАЛОГ</h2>
      <ReactOwlCarousel {...carouselConfig}>
        {catalogDB.map((item) => (
          <CatalogItem key={item.id} item={item} />
        ))}
      </ReactOwlCarousel>
    </section>
  );
};

export default Catalog;
