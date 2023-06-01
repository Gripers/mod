import styles from '@/styles/ProfileCards.module.scss';

import Image from 'next/image';

import { useCCFormat } from '@/hooks/useCCFormat';
import ProfileLayout from '@/components/layout/profile/ProfileLayout';
import AddCardModal from '@/components/modal/add-card/AddCardModal';
import ProfileDrawerHeader from '@/components/profile-drawer-header/ProfileDrawerHeader';

const MyCardsPage = () => {
  const cards = [{ id: 1, num: 2313209129283015 }];

  return (
    <ProfileLayout>
      <div className={styles.profile__wrapper__right_content}>
        {cards.length ? (
          <div className={styles.profile__wrapper__right__content_wrapper}>
            <ProfileDrawerHeader title='МОИ КАРТЫ' />
            <ul
              className={styles.profile__wrapper__right__content__wrapper_cards}
            >
              {cards.map((card) => (
                <li key={card.id}>
                  <b>{useCCFormat(card.num.toString())}</b>
                  <button>delete</button>
                </li>
              ))}
            </ul>
            <AddCardModal />
          </div>
        ) : (
          <div className={styles.profile__wrapper__right__content_nothing}>
            <Image
              src='/static/media/credit_card_big.svg'
              alt=''
              width={100}
              height={70}
            />
            <p>У ВАС НЕТ КАРТ</p>
            <p>Чтобы быстро оформлять заказы нужно добавить карту</p>
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default MyCardsPage;
