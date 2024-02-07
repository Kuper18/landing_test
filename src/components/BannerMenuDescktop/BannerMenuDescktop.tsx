/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import './BannerMenuDescktop.scss';

const items = ['Item', 'Item', 'Item', 'Item'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const BannerMenuDescktop = () => {
  return (
    <div
      className="banner-menu-descktop"
      style={{
        transform: 'translateX(0)',
      }}
    >
      <div className="banner-menu-descktop__wrapper">
        <p className="banner-menu-descktop__title">
          Lorem Ipsum is simply dummy
        </p>

        <ul className="banner-menu-descktop__list">
          {items.map((item, i) => (
            <li key={`${i + 1}`} className="banner-menu-descktop__item">
              <a className="banner-menu-descktop__link" href="/#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="numbers">
        <ul className="numbers__list">
          <li className="numbers__item">Note</li>
          {numbers.map((num) => (
            <li className="numbers__item" key={num}>
              {num}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
