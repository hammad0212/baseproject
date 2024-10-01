import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';

  return (
    <div>
      {showNavbar && <Navbar />}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
