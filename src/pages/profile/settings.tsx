import styles from "@/styles/ProfileSettings.module.scss";

import { Switch } from "@mui/material";

import ProfileLayout from "@/components/layout/profile/ProfileLayout";
import Button from "@/components/button/Button";
import ProfileDrawerHeader from "@/components/profile-drawer-header/ProfileDrawerHeader";

const MySettingsPage = () => {
  return (
    <ProfileLayout>
      <div className={styles.profile__wrapper__right_content}>
        <ProfileDrawerHeader title="НАСТРОЙКИ" />
        <form>
          <div className={styles.profile__wrapper__right__content_switches}>
            <div>
              <b>УВЕДОМЛЕНИЯ</b>
              <Switch color="default" />
            </div>
            <div>
              <b>ПОДПИСКА НА РАССЫЛКУ</b>
              <Switch color="default" />
            </div>
          </div>
          <div className={styles.profile__wrapper__right__content_buttons}>
            <Button isDark type="submit">
              СОХРАНИТЬ
            </Button>
            <Button>ОТМЕНА</Button>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default MySettingsPage;
