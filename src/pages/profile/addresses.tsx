import styles from "@/styles/ProfileAddresses.module.scss";

import Image from "next/image";

import ProfileLayout from "@/components/layout/profile/ProfileLayout";
import AddAddressModal from "@/components/modal/add-address/AddAddressModal";
import ProfileDrawerHeader from "@/components/profile-drawer-header/ProfileDrawerHeader";

const MyAddressesPage = () => {
  const cards = [
    {
      id: 1,
      owner: "Дильноза",
      phone: 998901233113,
      address: "м-в Хумоюн, дом 40, Мирзо-Улугбекский р-н. Ташкент",
      default: true,
    },
    {
      id: 2,
      owner: "Дильноза",
      phone: 998901233113,
      address: "м-в Хумоюн, дом 40, Мирзо-Улугбекский р-н. Ташкент",
      default: false,
    },
  ];

  return (
    <ProfileLayout>
      <div className={styles.profile__wrapper__right_content}>
        {cards.length ? (
          <div className={styles.profile__wrapper__right__content_wrapper}>
            <ProfileDrawerHeader title="МОИ АДРЕСА" />
            <ul
              className={styles.profile__wrapper__right__content__wrapper_cards}
            >
              {cards.map((card) => (
                <li
                  key={card.id}
                  className={
                    styles.profile__wrapper__right__content__wrapper__cards_card
                  }
                >
                  <p>{card.owner}</p>
                  <strong>{card.address}</strong>
                  <div
                    className={
                      styles.profile__wrapper__right__content__wrapper__cards__card_flex
                    }
                  >
                    {card.default ? <span>ПО УМОЛЧАНИЮ</span> : null}
                    <button>РЕДАКТИРОВАТЬ</button>
                  </div>
                </li>
              ))}
            </ul>
            <AddAddressModal />
          </div>
        ) : (
          <div className={styles.profile__wrapper__right__content_nothing}>
            <Image
              src="/static/media/location.svg"
              alt=""
              width={100}
              height={70}
            />
            <p>У ВАС НЕТ АДРЕСОВ</p>
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default MyAddressesPage;
