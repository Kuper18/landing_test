/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { asideLinks } from '../../utils/icons';

import './AsideLinks.scss';

const colors = [
  '#3A579A',
  '#00ABF0',
  '#24A2E0',
  '#CD1C1F',
  '#FC461E',
  '#F95149',
];

export const AsideLinks = () => {
  return (
    <ul className="aside-links">
      {asideLinks.map((icon, i) => (
        <li
          style={{
            backgroundColor: `${colors[i]}`,
          }}
          className="aside-links__item"
          key={`${icon}`}
        >
          <a className="aside-links__link" href="#">
            <img className="aside-links__icon" src={icon} alt="Icon" />
          </a>
        </li>
      ))}
    </ul>
  );
};
