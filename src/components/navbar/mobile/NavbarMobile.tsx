import styles from './NavbarMobile.module.scss';

import Link from 'next/link';
import Image from 'next/image';

const NavbarMobile = () => {
  return (
    <div className={styles.navbar__mobile}>
      <div className={styles.navbar__mobile_top}>
        <button>
          <Image src='/static/media/bars.svg' alt='' width={16} height={16} />
        </button>
        <div className={styles.navbar__mobile__top_logo}>
          <Link href='/'>
            <h1>MOD</h1>
          </Link>
        </div>
        <div className={styles.navbar__mobile__top_cusnavigation}>
          <Link href='/'>
            <Image
              src='/static/media/search_black.svg'
              alt=''
              width={20}
              height={20}
            />
          </Link>
          <Link href='/favorites'>
            <Image
              src='/static/media/heart.svg'
              alt=''
              width={20}
              height={20}
            />
          </Link>
          <Link href='/cart'>
            <Image src='/static/media/bag.svg' alt='' width={20} height={20} />
          </Link>
        </div>
      </div>
      <nav className={styles.navbar__mobile_bottom}>
        <ul>
          <li>
            <Link href='/'>ЖЕНЩИНАМ</Link>
          </li>
          <li>
            <Link href='/'>МУЖЧИНАМ</Link>
          </li>
          <li>
            <Link href='/'>ДЕТЯМ</Link>
          </li>
          {/* <li>
            <Link href='/'>БРЕНДЫ</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMobile;
