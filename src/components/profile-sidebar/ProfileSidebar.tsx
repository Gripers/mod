import styles from "./ProfileSidebar.module.scss";

import Link from "next/link";

const ProfileSidebar = () => {
  return (
    <nav className={styles.profile__sidebar}>
      <ul>
        <li>
          <Link href="/profile">МОИ ДАННЫЕ</Link>
        </li>
        <li>
          <Link href="/profile/cards">МОИ КАРТЫ</Link>
        </li>
        <li>
          <Link href="/profile/orders">МОИ ЗАКАЗЫ</Link>
        </li>
        <li>
          <Link href="/profile/addresses">МОИ АДРЕСА</Link>
        </li>
        <li>
          <Link href="/favorites">ИЗБРАННЫЕ</Link>
        </li>
        <li>
          <Link href="/profile/settings">НАСТРОЙКИ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileSidebar;
