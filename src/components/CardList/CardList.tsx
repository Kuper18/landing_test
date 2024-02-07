import React from 'react';
import { Card } from '../Card';

import './CardList.scss';

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
