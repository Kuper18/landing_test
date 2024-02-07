/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { SearchInput } from '../SearchInput';
import { NavList } from '../NavList';
import phoneIcon from '../../images/icons/phone.svg';
import cupIcon from '../../images/icons/cup.svg';
import androidIcon from '../../images/icons/android.svg';
import appleIcon from '../../images/icons/apple.svg';

import phoneIcon_dark from '../../images/icons/phone-dark.svg';
import cupIcon_dark from '../../images/icons/cup-dark.svg';
import androidIcon_dark from '../../images/icons/android-dark.svg';
import appleIcon_dark from '../../images/icons/apple-dark.svg';

import './NavMenu.scss';
import { useTheme } from '../../provider/ThemeContext';

type Props = {
  isOpenMenu: boolean;
  handleClick: () => void;
};

const icons = [phoneIcon, cupIcon, androidIcon, appleIcon];
const iconsDark = [
  phoneIcon_dark,
  cupIcon_dark,
  androidIcon_dark,
  appleIcon_dark,
];

export const NavMenu: React.FC<Props> = ({ isOpenMenu, handleClick }) => {
  const { themeType } = useTheme();
  const iconsToMap = themeType === 'dark'
    ? icons
    : iconsDark;

  return (
    <aside
      className="nav-menu"
      style={{
        transform: isOpenMenu ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <div className="nav-menu__wrapper">
        <SearchInput />
        <NavList handleClick={handleClick} />
      </div>

      <ul className="nav-menu__list">
        {iconsToMap.map((icon, i) => (
          <li key={`${icon}`} className="nav-menu__item">
            <a onClick={handleClick} className="nav-menu__link" href="#">
              <img src={icon} alt="Icon" />
              {`Menu item ${i + 1}`}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
