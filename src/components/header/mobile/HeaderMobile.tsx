import styles from './HeaderMobile.module.scss';

import Image from 'next/image';

const HeaderMobile = () => {
  return (
    <header id='container' className={styles.header__mobile}>
      <h2>DYSON</h2>
      <Image src='/static/media/header_mobile.svg' alt='' fill />
    </header>
  );
};

export default HeaderMobile;
