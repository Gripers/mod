import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>ИНТЕРНЕТ МАГАЗИН</h3>
        <ul>
          <li>Центр поддержки Ason</li>
          <li>Статус заказа по номеру</li>
          <li>Оплата</li>
          <li>Условия возврата</li>
          <li>Условия доставки</li>
          <li>Как выбрать размер</li>
          <li>Как оформить заказ</li>
        </ul>
      </div>
      <div>
        <h3>МАГАЗИНЫ</h3>
        <ul>
          <li>Центр поддержки Ason</li>
          <li>Статус заказа по номеру</li>
          <li>Оплата</li>
          <li>Условия возврата</li>
        </ul>
      </div>
      <div>
        <h3>МОЙ АККАУНТ</h3>
        <ul>
          <li>Центр поддержки Ason</li>
          <li>Статус заказа по номеру</li>
          <li>Оплата</li>
        </ul>
      </div>
      <div>
        <h3>НОВОСТИ</h3>
        <p>
          Вы хотите получать больше уведомлений об акциях и продажах?
          Подпишитесь на нашу ссылку
        </p>
      </div>
    </footer>
  );
};

export default Footer;
