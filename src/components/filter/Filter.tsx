import { useId } from 'react';
import styles from './Filter.module.scss';

import Select from 'react-select';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__top}>
        <Select placeholder='Категорий' instanceId={useId()} />
        <Select placeholder='Бренды' instanceId={useId()} />
        <button>Скидки</button>
        <button>Новинки</button>
      </div>
      <div className={styles.filter__bottom}>
        <span>Всего 4</span>
        <Select placeholder='Сортировка' instanceId={useId()} />
      </div>
    </div>
  );
};

export default Filter;
