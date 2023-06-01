import styles from '@/styles/Favorites.module.scss';

import { useRouter } from 'next/router';
import Image from 'next/image';

import { sneakersDB } from '@/db/sneakers.db';
import SectionLayout from '@/components/layout/section/SectionLayout';
import Button from '@/components/button/Button';
import ProductItem from '@/components/item/product-item/ProductItem';

const items = sneakersDB;

const FavoritesPage = () => {
  const { push } = useRouter();

  return (
    <section id='container' className={styles.favorites}>
      <SectionLayout title='ИЗБРАННОЕ' />
      <div className={styles.favorites__content}>
        {items.length ? (
          <div className={styles.favorites__content_wrapper}>
            {items.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className={styles.favorites__content_nothing}>
            <Image
              src='/static/media/heart_big.svg'
              alt=''
              width={70}
              height={70}
            />
            <p>Здесь пока пусто</p>
            <p>Вы пока ничего не добавили в избранное</p>
            <div className={styles.favorites__content__nothing_buttons}>
              <Button onClick={() => push('/products')}>
                ПЕРЕЙТИ В КАТАЛОГ
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FavoritesPage;
