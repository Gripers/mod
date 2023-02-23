import styles from './ResponsiveNavMiddle.module.scss';

import Image from 'next/image';

import burger_ico from '@/assets/bars.svg';
import search_ico from '@/assets/search.svg';

const ResponsiveNavMiddle = () => {
  return (
    <div className={styles.cnt}>
      <button>
        <Image src={burger_ico} alt='' />
      </button>
      <button>
        <Image src={search_ico} alt='' />
      </button>
    </div>
  );
};

export default ResponsiveNavMiddle;
