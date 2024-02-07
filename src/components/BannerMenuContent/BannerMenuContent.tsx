import React from 'react';
import cn from 'classnames';
import './BannerMenuContent.scss';

type Props = {
  isOpenMenu: boolean;
  handleClick?: () => void;
};

const items = ['Item', 'Item', 'Item', 'Item'];

export const BannerMenuContent: React.FC<Props> = ({
  isOpenMenu,
  handleClick,
}) => {
  return (
    <div
      className={cn('banner-menu__content')}
      style={{
        transform: isOpenMenu ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <p className="banner-menu__title">Lorem Ipsum is simply dummy</p>

      <ul className="banner-menu__list">
        {items.map((item, i) => (
          <li key={`${i + 1}`} className="banner-menu__item">
            <a className="banner-menu__link" href="/#" onClick={handleClick}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
