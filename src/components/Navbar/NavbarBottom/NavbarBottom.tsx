import styles from './NavbarBottom.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { categories_db } from '@/db/categories.db';
import search_ico from '@/assets/search.svg';

const NavbarBottom = () => {
  return (
    <div className={styles.cnt}>
      <div className={styles.fst}>
        {categories_db?.map((c) => (
          <Link href='/' key={c?.id}>
            {c?.name}
          </Link>
        ))}
      </div>
      <div className={styles.sec}>
        <button>
          <Image src={search_ico} alt='' />
        </button>
        <input type='text' placeholder='Товар, бренд или цвет' />
      </div>
    </div>
  );
};

export default NavbarBottom;
