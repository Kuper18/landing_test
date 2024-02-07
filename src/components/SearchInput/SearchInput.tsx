/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import searchIcon from '../../images/icons/search-icon.svg';

import './SearchInput.scss';

export const SearchInput = () => {
  return (
    <div className="search">
      <img className="search__icon" src={searchIcon} alt="Search icon" />
      <input className="search__input" type="text" placeholder="Search for…" />
    </div>
  );
};
