import React, { useState } from 'react';
import { BannerMenuContent } from '../BannerMenuContent/BannerMenuContent';
import { removeScrollForBody } from '../../utils/removeScrollForBody';
import banner_menu_dark from '../../images/icons/banner-menu-dark.svg';
import banner_menu from '../../images/icons/banner-menu.svg';
import { useTheme } from '../../provider/ThemeContext';
import './BannerMenu.scss';

export const BannerMenu: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { themeType } = useTheme();

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
    removeScrollForBody(!isOpenMenu);
  };

  return (
    <aside className="banner-menu">
      <div>
        <div className="banner-menu__wrapper">
          <span className="banner-menu__text">More info</span>
          <button
            onClick={handleClick}
            className="banner-menu__button"
            type="button"
          >
            <img
              src={themeType === 'dark' ? banner_menu : banner_menu_dark}
              alt="Menu icon"
            />
          </button>
        </div>
      </div>

      <BannerMenuContent handleClick={handleClick} isOpenMenu={isOpenMenu} />
    </aside>
  );
};
