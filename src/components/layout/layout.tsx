import { ReactNode } from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
