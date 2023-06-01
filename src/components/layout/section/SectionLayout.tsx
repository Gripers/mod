import styles from './SectionLayout.module.scss';

import GoBack from '@/components/goback/GoBack';

type SectionLayoutProps = { title: string };

const SectionLayout = ({ title }: SectionLayoutProps) => {
  return (
    <div className={styles.section__layout}>
      <GoBack />
      <h2>{title}</h2>
    </div>
  );
};

export default SectionLayout;
