import Link from "next/link";
import Image from "next/image";

const NavbarTop = ({ styles }: any) => {
  return (
    <div className={styles.navbar__top}>
      <div>
        <Link href="/">
          <Image src="/static/media/warn.svg" alt="" width={16} height={16} />
          <span>Помощь и контакт</span>
        </Link>
      </div>
      <div>
        <Link href="/registration">
          <Image src="/static/media/user.svg" alt="" width={16} height={16} />
          <span>Регистрация</span>
        </Link>
        <div className={styles.navbar__top_line}></div>
        <Link href="/login">
          <Image src="/static/media/login.svg" alt="" width={16} height={16} />
          <span>Логин</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarTop;
