// Layout.js

import Navbar from './NavBar';
import Footer from './Footer';
import { useRef } from 'react';

const Layout = ({ children }) => {
    const sectionRef = useRef(null);
  return (
    <>
    <Navbar sectionRef={sectionRef} />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
