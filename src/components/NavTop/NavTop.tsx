import React from 'react';
import moon_icon from '../../images/icons/moon-icon.svg';
import sun_icon from '../../images/icons/sun-icon.svg';
import { useTheme } from '../../provider/ThemeContext';
import { iconsMenu, socialMediaIcons } from '../../utils/icons';
import './NavTop.scss';

export const NavTop = () => {
  const { setTheme, themeType } = useTheme();

  const handleClick = () => {
    setTheme((prevThemeType) => {
      return prevThemeType === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__box">
          <ul className="nav-top-list">
            {iconsMenu.map((icon, i) => (
              <li key={`${icon}`} className="nav-top-list__item">
                <a className="nav-top-list__link" href="/">
                  <img src={icon} alt="Icon" />
                  {`Menu item ${i + 1}`}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__wrapper">
            <ul className="nav__list">
              {socialMediaIcons.map((icon) => (
                <li className="nav__item" key={`${icon}`}>
                  <a className="nav__link" href="/">
                    <img className="nav__icon" src={icon} alt="Icon" />
                  </a>
                </li>
              ))}
            </ul>

            <button type="button" onClick={handleClick} className="toggle">
              <img
                style={{
                  left: themeType === 'dark' ? '3px' : '26px',
                }}
                className="toggle__icon"
                src={themeType === 'dark' ? moon_icon : sun_icon}
                alt="Toggle icon"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
