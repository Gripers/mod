import Link from 'next/link';
import Image from 'next/image';

import { useCart } from '@/hooks/useCart';
import { useGetGendersQuery } from '@/store/api/home.api';

const NavbarMiddle = ({ styles }: any) => {
  const { totalItems } = useCart();
  const { data } = useGetGendersQuery('');

  return (
    <div className={styles.navbar__middle}>
      <nav>
        <ul>
          {data?.map((gender) => (
            <li key={gender.id}>
              <Link href={gender.slug}>{gender.name}</Link>
            </li>
          ))}
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
          <span className={styles.navbar__middle__cusnavigation_sup}>
            {totalItems}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMiddle;
