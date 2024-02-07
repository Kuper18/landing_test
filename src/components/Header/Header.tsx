import React from 'react';
import { NavTop } from '../NavTop';
import { NavBottom } from '../NavBottom';
import { Banner } from '../Banner';
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
