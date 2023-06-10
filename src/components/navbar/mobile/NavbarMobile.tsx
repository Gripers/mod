import { useState } from 'react';
import styles from './NavbarMobile.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useGetGendersQuery } from '@/store/api/home.api';
import MainDrawer from '@/components/drawer/main/MainDrawer';

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetGendersQuery('');

  return (
    <div className={styles.navbar__mobile}>
      <div className={styles.navbar__mobile_top}>
        <button onClick={() => setOpen(true)}>
          <Image src='/static/media/bars.svg' alt='' width={16} height={16} />
        </button>
        <MainDrawer open={open} setOpen={setOpen} />
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data?.map((gender) => (
              <li key={gender.id}>
                <Link href={gender.slug}>{gender.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavbarMobile;
