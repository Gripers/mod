import Link from 'next/link';
import Image from 'next/image';

const NavbarMiddle = ({ styles }: any) => {
  return (
    <div className={styles.navbar__middle}>
      <nav>
        <ul>
          <li>
            <Link href='/women'>ЖЕНЩИНАМ</Link>
          </li>
          <li>
            <Link href='/men'>МУЖЧИНАМ</Link>
          </li>
          <li>
            <Link href='/kids'>ДЕТЯМ</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.navbar__middle_logo}>
        <Link href='/'>
          <h1>MOD</h1>
        </Link>
      </div>
      <div className={styles.navbar__middle_cusnavigation}>
        <Link href='/favorites'>
          <Image src='/static/media/heart.svg' alt='' width={16} height={16} />
          <span>Избранное</span>
        </Link>
        <Link href='/cart'>
          <Image src='/static/media/bag.svg' alt='' width={16} height={16} />
          <span>Корзина</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMiddle;
