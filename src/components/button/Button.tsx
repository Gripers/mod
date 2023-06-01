import styles from './Button.module.scss';

type ButtonProps = {
  isDark?: boolean;
  children: string;
  [x: string]: any;
};

const Button = ({ isDark, children, ...rest }: ButtonProps) => {
  return isDark ? (
    <button className={styles.button__dark} {...rest}>
      {children}
    </button>
  ) : (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
