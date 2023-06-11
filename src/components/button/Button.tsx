import styles from './Button.module.scss';

import Spinner from '../spinner/Spinner';

type ButtonProps = {
  isDark?: boolean;
  withLoading?: boolean;
  children: string;
  [x: string]: any;
};

const Button = ({ isDark, withLoading, children, ...rest }: ButtonProps) => {
  return isDark ? (
    <button className={styles.button__dark} {...rest}>
      {withLoading ? <Spinner /> : children}
    </button>
  ) : (
    <button className={styles.button} {...rest}>
      {withLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
