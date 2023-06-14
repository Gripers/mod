import styles from "@/styles/Login.module.scss";

import SectionLayout from "@/components/layout/section/SectionLayout";
import LoginModal from "@/components/modal/login/LoginModal";

const LoginPage = () => {
  return (
    <section id="container" className={styles.login}>
      <SectionLayout title="ЛОГИН" />
      <div className={styles.login__content}>
        <div className={styles.login__content_card}>
          <p>ЗДРАВСТВУЙТЕ</p>
          <p>
            Чтобы воспользоваться всеми возможностями вам надо войти или
            зарегистрироваться
          </p>
          <LoginModal />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
