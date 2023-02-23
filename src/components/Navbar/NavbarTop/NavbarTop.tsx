import styles from './NavbarTop.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import user_ico from '@/assets/user.svg';
import login_ico from '@/assets/login.svg';

const NavbarTop = () => {
  return (
    <div className={styles.cnt}>
      <div>
        <Link href='/'>Помощь и контакт</Link>
      </div>
      <div className={styles.sec}>
        <div>
          <Image src={user_ico} alt='' />
          <Link href='/sign-up'>Регистрация</Link>
        </div>
        <div className='line'></div>
        <div>
          <Image src={login_ico} alt='' />
          <Link href='/sign-in'>Логин</Link>
        </div>
        <div className={styles.translation_box}>
          <button>Ру</button>
          <div className='line'></div>
          <button>En</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
