import styles from './BrandItem.module.scss';

import Link from 'next/link';

import { Brand } from '@/types/brand.type';

type BrandItemProps = { brand: Brand };

const BrandItem = ({ brand }: BrandItemProps) => {
  return (
    <Link href='/' className={styles.brand__item}>
      <h2>{brand.name}</h2>
    </Link>
  );
};

export default BrandItem;
