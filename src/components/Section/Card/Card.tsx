import styles from './Card.module.scss';

import Image from 'next/image';

const Card = ({ obj }: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <Image src={obj?.image} alt='' />
      </div>
      <div className={styles.content}>
        <p>{obj?.title}</p>
        <h4>{obj?.name}</h4>
        <h3>{obj?.price} UZS</h3>
      </div>
    </div>
  );
};

export default Card;
