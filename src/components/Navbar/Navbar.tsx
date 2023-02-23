import styles from './Navbar.module.scss';
import NavbarBottom from './NavbarBottom/NavbarBottom';
import NavbarMiddle from './NavbarMiddle/NavbarMiddle';
import NavbarTop from './NavbarTop/NavbarTop';

const Navbar = () => {
  return (
    <>
      <NavbarTop />
      <NavbarMiddle />
      <NavbarBottom />
    </>
  );
};

export default Navbar;
