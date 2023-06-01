import styles from './ProductItem.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/types/product.type';
import ToFav from '@/components/tofav/ToFav';

type ProductItemProps = { item: Product };

const ProductItem = ({ item }: ProductItemProps) => {
  return (
    <Link href={`/products/${item.id}`} className={styles.product__item}>
      <div className={styles.product__item_image}>
        <Image src={item.image} alt='' fill />
        <ToFav />
      </div>
      <div className={styles.product__item_content}>
        <strong>{item.title}</strong>
        <span>{item.description}</span>
        <strong>{item.price} UZS</strong>
      </div>
    </Link>
  );
};

export default ProductItem;
