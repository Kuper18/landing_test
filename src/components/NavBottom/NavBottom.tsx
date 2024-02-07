/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import cn from 'classnames';
import { SearchInput } from '../SearchInput/SearchInput';
import { NavList } from '../NavList/NavList';
import { removeScrollForBody } from '../../utils/removeScrollForBody';
import logo_light from '../../images/icons/Logo.svg';
import logo_dark from '../../images/icons/Logo-dark.svg';
import { NavMenu } from '../NavMenu/NavMenu';

import './NavBottom.scss';
import { useTheme } from '../../provider/ThemeContext';

export const NavBottom = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { themeType } = useTheme();

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
    removeScrollForBody(!isOpenMenu);
  };

  return (
    <nav className="nav-bottom">
      <div className="container">
        <div className="nav-bottom__box">
          <div className="nav-bottom__wrapper">
            <img
              className="logo"
              src={themeType === 'dark' ? logo_light : logo_dark}
              alt="Logo"
            />
            <NavList />
          </div>

          <button
            type="button"
            onClick={handleClick}
            className={cn('menu', {
              'menu-open': isOpenMenu,
            })}
          />

          <SearchInput />
          <NavMenu handleClick={handleClick} isOpenMenu={isOpenMenu} />
        </div>
      </div>
    </nav>
  );
};
