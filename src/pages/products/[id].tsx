import styles from "@/styles/SingleProduct.module.scss";

import { useRouter } from "next/router";
import Image from "next/image";

import { sneakersDB } from "@/db/sneakers.db";
import { useCart } from "@/hooks/useCart";
import GoBack from "@/components/goback/GoBack";
import ToFav from "@/components/tofav/ToFav";

const SingleProductPage = () => {
  const { query } = useRouter();
  const { addItem, removeItem, getItem } = useCart();

  const item = sneakersDB.find((i) => i.id === Number(query.id));

  return (
    <section id="container" className={styles.single__product}>
      <GoBack />
      <div className={styles.single__product_wrapper}>
        <div className={styles.single__product__wrapper_left}>
          <Image src={item?.image!} alt="" fill />
          <ToFav item={item!} />
        </div>
        <div className={styles.single__product__wrapper_right}>
          <p>{item?.title}</p>
          <h2>{item?.description}</h2>
          <h2>{item?.price} UZS</h2>
          {!getItem(item?.id!) ? (
            <button onClick={() => addItem(item)}>ДОБАВИТЬ В КОРЗИНУ</button>
          ) : (
            <button onClick={() => removeItem(item?.id)}>
              УБРАТЬ ИЗ КОРЗИНЫ
            </button>
          )}
          <hr />
          <ul>
            <li>
              <p>
                <b>СТАНДАРТНАЯ</b> ДОСТАВКА
              </p>
              <p>
                <strong>БЕСПЛАТНО</strong> 2-4 рабочих дня
              </p>
            </li>
            <li>
              <p>
                <b>ЭКСПРЕСС</b> ДОСТАВКА
              </p>
              <p>
                <strong>70 000 UZS</strong> 1-2 рабочих дня
              </p>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <p>ЦВЕТ</p>
              <p>Фиолетовый</p>
            </li>
            <li>
              <p>МАТЕРИАЛ</p>
              <p>Джерси</p>
            </li>
            <li>
              <p>СОСТАВ</p>
              <p>Полиэстер 100%</p>
            </li>
            <li>
              <p>УХОД</p>
              <p>Ручная стирка</p>
            </li>
            <li>
              <p>СТРАНА</p>
              <p>Италия</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
