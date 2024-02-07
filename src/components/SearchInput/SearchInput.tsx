import React from 'react';
import searchIcon from '../../images/icons/search-icon.svg';

import './SearchInput.scss';

export const SearchInput = () => {
  return (
    <div className="search">
      <label>
        <img className="search__icon" src={searchIcon} alt="Search icon" />
        <input
          className="search__input"
          type="text"
          placeholder="Search for…"
        />
      </label>
    </div>
  );
};
