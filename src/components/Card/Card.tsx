import React from 'react';
import cardImg from '../../images/card-img.png';
import alcoIcon from '../../images/icons/alco.svg';
import clockIcon from '../../images/icons/clock.svg';
import './Card.scss';

export const Card = () => {
  return (
    <article className="card">
      <img className="card__image" src={cardImg} alt="Game card" />
      <h3 className="card__title">Lorem Ipsum is simply dummy</h3>
      <p className="card__text">
        <span>
          <img className="card__icon" src={alcoIcon} alt="Alco icon" />
          Alco
        </span>
        <span>
          <img className="card__icon" src={clockIcon} alt="Clock icon" />
          26 janvier 2023
        </span>
      </p>
    </article>
  );
};
