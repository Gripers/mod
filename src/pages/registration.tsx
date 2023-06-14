import styles from "@/styles/Login.module.scss";

import SectionLayout from "@/components/layout/section/SectionLayout";
import RegistrationModal from "@/components/modal/registration/RegistrationModal";

const RegistrationPage = () => {
  return (
    <section id="container" className={styles.login}>
      <SectionLayout title="РЕГИСТРАЦИЯ" />
      <div className={styles.login__content}>
        <div className={styles.login__content_card}>
          <p>ЗДРАВСТВУЙТЕ</p>
          <p>
            Чтобы воспользоваться всеми возможностями вам надо войти или
            зарегистрироваться
          </p>
          <RegistrationModal />
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
