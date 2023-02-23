import styles from './Header.module.scss';

import Image from 'next/image';

import arrow_ico from '@/assets/arrow.svg';
import pic from '@/assets/image 10.jpg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.head}>
        <Image src={arrow_ico} alt='' />
        <p>НАЗАД</p>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <Image src={pic} alt='' />
        </div>
        <div className={styles.right}>
          <p>JADED LONDON</p>
          <h4>EXCLUSIVEPANELLED WIDE LEG — Jogginghose</h4>
          <h1>98 313 545 UZS</h1>
          <p>Артикул: 21325124412</p>
          <button>ДОБАВИТЬ В КОРЗИНУ</button>
          <div className={styles.nn_wrapper}>
            <div>
              <p>
                <b>СТАНДАРТНАЯ </b>ДОСТАВКА
              </p>
              <p>
                <b>БЕСПЛАТНО </b>2-4 рабочих дня
              </p>
            </div>
            <div>
              <p>
                <b>ЭКСПРЕСС </b>ДОСТАВКА
              </p>
              <p>
                <b>70 000 UZS </b>2-4 рабочих дня
              </p>
            </div>
            <div>
              <p>ЦВЕТ</p>
              <p>Фиолетовый</p>
            </div>
            <div>
              <p>МАТЕРИАЛ</p>
              <p>Джерси</p>
            </div>
            <div>
              <p>СОСТАВ</p>
              <p>Полиэстер 100%</p>
            </div>
            <div>
              <p>УXОД</p>
              <p>Ручная стирка</p>
            </div>
            <div>
              <p>СТРАНА</p>
              <p>Италия</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
