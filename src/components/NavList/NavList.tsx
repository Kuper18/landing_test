/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import './NavList.scss';

const items = ['Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item'];

type Props = {
  handleClick?: () => void;
};

export const NavList: React.FC<Props> = ({ handleClick = () => {} }) => {
  return (
    <ul className="list">
      {items.map((item, i) => (
        <li className="list__item" key={`${i + 1}`}>
          <a onClick={handleClick} className="list__link" href="/#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
