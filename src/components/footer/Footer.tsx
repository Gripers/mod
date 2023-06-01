import styles from './Footer.module.scss';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__wrapper_top}>
          <p>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</p>
          <p>ГОРЯЧАЯ ЛИНИЯ</p>
          <h2>+998 (33) 999-99-90</h2>
          <p>Будни: с 9:00 до 19:00 (Ташкентское время)</p>
        </div>
        <hr />
        <div className={styles.footer__wrapper_bottom}>
          <div className={styles.footer__wrapper__bottom_list}>
            <ul>
              <li>ИНТЕРНЕТ МАГАЗИН</li>
              <li>
                <Link href='/'>Центр поддержки Ason</Link>
              </li>
              <li>
                <Link href='/'>Статус заказа по номеру</Link>
              </li>
              <li>
                <Link href='/'>Оплата</Link>
              </li>
              <li>
                <Link href='/'>Условия возврата</Link>
              </li>
              <li>
                <Link href='/'>Условия доставки</Link>
              </li>
              <li>
                <Link href='/'>Как выбрать размер</Link>
              </li>
              <li>
                <Link href='/'>Как оформить заказ</Link>
              </li>
            </ul>
            <ul>
              <li>МАГАЗИНЫ</li>
              <li>
                <Link href='/'>Центр поддержки Ason</Link>
              </li>
              <li>
                <Link href='/'>Статус заказа по номеру</Link>
              </li>
              <li>
                <Link href='/'>Оплата</Link>
              </li>
              <li>
                <Link href='/'>Условия возврата</Link>
              </li>
            </ul>
            <ul>
              <li>МОЙ АККАУНТ</li>
              <li>
                <Link href='/'>Мои карты</Link>
              </li>
              <li>
                <Link href='/'>Мои заказы</Link>
              </li>
              <li>
                <Link href='/'>Мои адреса</Link>
              </li>
              <li>
                <Link href='/'>Избранные</Link>
              </li>
            </ul>
            <ul>
              <li>УЗНАТЬ БОЛЬШЕ</li>
              <li>
                <Link href='/'>Мои карты</Link>
              </li>
              <li>
                <Link href='/'>Мои заказы</Link>
              </li>
              <li>
                <Link href='/'>Мои адреса</Link>
              </li>
              <li>
                <Link href='/'>Избранные</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
