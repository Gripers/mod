import styles from '@/styles/Profile.module.scss';

import Image from 'next/image';

import Button from '@/components/button/Button';
import ProfileLayout from '@/components/layout/profile/ProfileLayout';
import ProfileDrawerHeader from '@/components/profile-drawer-header/ProfileDrawerHeader';

const ProfilePage = () => {
  return (
    <ProfileLayout>
      <div className={styles.profile__wrapper__right_content}>
        <ProfileDrawerHeader title='МОИ ДАННЫЕ' />
        <b>Сохраняйте понравившиеся вам товары и проверяйте их наличие</b>
        <p>
          Из обзора учетной записи пользователя можно просматривать последние
          операции и редактировать данные учетной записи пользователя. Выберите
          одну из приведенных ниже ссылок, чтобы просмотреть или отредактировать
          информацию.
        </p>
        <form>
          <label htmlFor='name_surname'>
            ИМЯ И ФАМИЛИЯ
            <input type='text' id='name_surname' />
          </label>
          <label htmlFor='gender'>
            ПОЛ
            <input type='text' id='gender' />
          </label>
          <label htmlFor='phone'>
            ТЕЛЕФОН
            <input type='number' id='phone' />
          </label>
          <label htmlFor='birthday'>
            ИМЯ И ФАМИЛИЯ
            <input type='date' id='birthday' />
          </label>
          <label htmlFor='email'>
            EMAIL
            <input type='email' id='email' />
          </label>
          <label htmlFor='city'>
            ГОРОД
            <input type='text' id='city' />
          </label>
          <div className={styles.profile__wrapper__right__content_avatar}>
            <Image
              src='/static/media/avatar.jpg'
              alt=''
              width={100}
              height={100}
            />
            <div>
              <label htmlFor='avatar'>
                ЗАГРУЗИТЬ ДРУГОЕ
                <input type='file' id='avatar' />
              </label>
              <button>УДАЛИТЬ</button>
            </div>
          </div>
          <div className={styles.profile__wrapper__right__content_buttons}>
            <Button isDark type='submit'>
              СОХРАНИТЬ
            </Button>
            <Button>ОТМЕНА</Button>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default ProfilePage;
