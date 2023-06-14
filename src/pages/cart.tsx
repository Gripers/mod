import styles from "@/styles/Cart.module.scss";

import { useRouter } from "next/router";
import Image from "next/image";

import { useCart } from "@/hooks/useCart";
import SectionLayout from "@/components/layout/section/SectionLayout";
import Button from "@/components/button/Button";
import CartItem from "@/components/item/cart-item/CartItem";

const CartPage = () => {
  const { push } = useRouter();
  const { items, isEmpty } = useCart();

  return (
    <section id="container" className={styles.cart}>
      <SectionLayout title="КОРЗИНА" />
      <div className={styles.cart__content}>
        {isEmpty ? (
          <div className={styles.cart__content_nothing}>
            <Image
              src="/static/media/bag_big.svg"
              alt=""
              width={70}
              height={70}
            />
            <p>Здесь пока пусто</p>
            <p>Вы пока ничего не добавили в корзину</p>
            <div className={styles.cart__content__nothing_buttons}>
              <Button onClick={() => push("/login")}>ВОЙТИ</Button>
              <Button isDark onClick={() => push("/products")}>
                ПРОДОЛЖИТЬ ПОКУПКИ
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.cart__content_wrapper}>
            <div className={styles.cart__content__wrapper_left}>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className={styles.cart__content__wrapper_right}>
              <b>Всего 356000 UZS</b>
              <b>Величая налоги за исключением доставки</b>
              <Button isDark>КУПИТЬ</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
