/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { socialMediaIcons, socialMediaIconsLight } from '../../utils/icons';
import { useTheme } from '../../provider/ThemeContext';
import './FooterListIcon.scss';

export const FooterListIcon = () => {
  const { themeType } = useTheme();
  const iconToMap = themeType === 'dark'
    ? socialMediaIcons
    : socialMediaIconsLight;

  return (
    <ul className="footer-list-icon">
      {iconToMap.map((icon) => (
        <li className="footer-list-icon__item" key={`${icon}`}>
          <a className="footer-list-icon__link" href="#">
            <img className="footer-icon" src={icon} alt="Icon" />
          </a>
        </li>
      ))}
    </ul>
  );
};
