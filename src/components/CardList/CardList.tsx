import React from 'react';

import './CardList.scss';
import { Card } from '../Card/Card';

export const CardList = () => {
  return (
    <div className="card-list">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
