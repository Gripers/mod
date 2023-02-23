import styles from './NavbarMiddle.module.scss';

import Image from 'next/image';

import heart_ico from '@/assets/heart.svg';
import cart_ico from '@/assets/cart.svg';
import ResponsiveNavMiddle from './Responsive/ResponsiveNavMiddle';

const NavbarMiddle = () => {
  return (
    <div className={styles.cnt}>
      <div className={styles.fst}>
        <ResponsiveNavMiddle />
        <ul>
          <li>DAMEN</li>
          <li>
            <b>HERREN</b>
          </li>
          <li>KINDER</li>
        </ul>
      </div>
      <div className={styles.logo}>
        <h1>MOD</h1>
      </div>
      <div className={styles.sec}>
        <div>
          <Image src={heart_ico} alt='' />
          <p>Избранное</p>
        </div>
        <div>
          <Image src={cart_ico} alt='' />
          <p>Корзина</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
