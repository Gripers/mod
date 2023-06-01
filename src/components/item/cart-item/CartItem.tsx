import styles from './CartItem.module.scss';

import Image from 'next/image';

import { Product } from '@/types/product.type';

type CartItemProps = { item: Product };

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__item_image}>
        <Image src={item.image} alt='' width={100} height={100} />
      </div>
      <div className={styles.cart__item_content}>
        <strong>{item.title}</strong>
        <p>{item.description}</p>
        <div className={styles.cart__item__content_flx}>
          <strong>{item.price} UZS</strong>
          <div className={styles.cart__item__content__flx_quantity}>
            <button>+</button>
            <span>{item.quantity}</span>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
