import styles from "./CartItem.module.scss";

import Image from "next/image";

import { Product } from "@/types/product.type";
import { useCart } from "@/hooks/useCart";

type CartItemProps = { item: Product };

const CartItem = ({ item }: CartItemProps) => {
  const { updateItemQuantity, removeItem } = useCart();

  const increment = () =>
    updateItemQuantity({
      id: item.id,
      quantity: item.quantity! + 1,
    });

  const decrement = () => {
    if (item.quantity! <= 1) removeItem(item.id);

    updateItemQuantity({
      id: item.id,
      quantity: item.quantity! - 1,
    });
  };

  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__item_image}>
        <Image src={item.image} alt="" width={100} height={100} />
      </div>
      <div className={styles.cart__item_content}>
        <strong>{item.title}</strong>
        <p>{item.description}</p>
        <div className={styles.cart__item__content_flx}>
          <strong>{item.price} UZS</strong>
          <div className={styles.cart__item__content__flx_quantity}>
            <button onClick={increment}>+</button>
            <span>{item.quantity}</span>
            <button onClick={decrement}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
