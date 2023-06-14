import styles from "./Navbar.module.scss";

import { useWindowSize } from "@/hooks/useWindowSize";
import NavbarTop from "./blocks/NavbarTop";
import NavbarMiddle from "./blocks/NavbarMiddle";
import NavbarBottom from "./blocks/NavbarBottom";
import NavbarMobile from "./mobile/NavbarMobile";

const Navbar = () => {
  const { width } = useWindowSize();

  return width! <= 700 ? (
    <NavbarMobile />
  ) : (
    <div id="container" className={styles.navbar}>
      <NavbarTop styles={styles} />
      <NavbarMiddle styles={styles} />
      <NavbarBottom styles={styles} />
    </div>
  );
};

export default Navbar;
