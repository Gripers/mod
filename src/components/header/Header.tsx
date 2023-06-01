import styles from './Header.module.scss';

import Link from 'next/link';

import { useWindowSize } from '@/hooks/useWindowSize';
import HeaderMobile from './mobile/HeaderMobile';

const Header = () => {
  const { width } = useWindowSize();

  return width! <= 700 ? (
    <HeaderMobile />
  ) : (
    <header className={styles.header}>
      <div className={styles.header__card}>
        <h2>ЛЕГКИЕ КУРТКИ И ВЕТРОВКИ</h2>
        <Link href='/'>Подробнее</Link>
      </div>
    </header>
  );
};

export default Header;
