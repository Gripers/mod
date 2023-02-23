import styles from './Section.module.scss';

import Link from 'next/link';

import { clothes_db } from '@/db/clothes.db';
import Card from './Card/Card';

const Section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h3>СМОТРИТЕ ТАК ЖЕ</h3>
        <Link href='/'>Посмотреть</Link>
      </div>
      <div className={styles.body}>
        {clothes_db?.map((c) => (
          <Card key={c?.id} obj={c} />
        ))}
      </div>
    </section>
  );
};

export default Section;
