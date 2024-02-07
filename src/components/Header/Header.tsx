import React from 'react';
import { NavTop } from '../NavTop/NavTop';
import { NavBottom } from '../NavBottom/NavBottom';
import { Banner } from '../Banner/Banner';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <NavTop />
      <NavBottom />
      <Banner />
    </header>
  );
};
