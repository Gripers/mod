import Link from 'next/link';
import Image from 'next/image';

const NavbarBottom = ({ styles }: any) => {
  return (
    <div className={styles.navbar__bottom}>
      <nav>
        <ul>
          <li>
            <Link href='/'>Красота</Link>
          </li>
          <li>
            <Link href='/'>Обувь</Link>
          </li>
          <li>
            <Link href='/'>Аксессуары</Link>
          </li>
          <li>
            <Link href='/'>Одежда</Link>
          </li>
          <li>
            <Link href='/'>Спорт</Link>
          </li>
        </ul>
      </nav>
      <form>
        <Image src='/static/media/search.svg' alt='' width={16} height={16} />
        <input type='text' placeholder='Товар, бренд или цвет' />
      </form>
    </div>
  );
};

export default NavbarBottom;
