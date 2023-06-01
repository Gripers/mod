import styles from '@/styles/ProfileOrders.module.scss';

import Image from 'next/image';

import ProfileLayout from '@/components/layout/profile/ProfileLayout';
import ProfileDrawerHeader from '@/components/profile-drawer-header/ProfileDrawerHeader';

const MyOrdersPage = () => {
  // НАДО МЕНЯТЬ МАССИВ
  const cards = [{ id: 1, num: 23 }];

  return (
    <ProfileLayout>
      <div className={styles.profile__wrapper__right_content}>
        {cards.length ? (
          <div className={styles.profile__wrapper__right__content_wrapper}>
            <ProfileDrawerHeader title='МОИ ЗАКАЗЫ' />
            <ul
              className={styles.profile__wrapper__right__content__wrapper_cards}
            >
              {cards.map((card) => (
                <li key={card.id}></li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={styles.profile__wrapper__right__content_nothing}>
            <Image
              src='/static/media/ticket.svg'
              alt=''
              width={100}
              height={70}
            />
            <p>У ВАС ПОКА НЕТ ЗАКАЗОВ</p>
            <p>Здесь появится информация о ваших заказах</p>
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default MyOrdersPage;
