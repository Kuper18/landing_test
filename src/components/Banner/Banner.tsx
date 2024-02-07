/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import gamePhoto from '../../images/Game Photo.png';
import { BannerMenu } from '../BannerMenu/BannerMenu';
import { Button } from '../Button/Button';
import androidIcon from '../../images/icons/android.svg';
import appleIcon from '../../images/icons/apple.svg';
import downloadIcon from '../../images/icons/download-icon.svg';
import { RatingCircle } from '../RatingCircle/RatingCircle';
import { BannerMenuDescktop } from '../BannerMenuDescktop/BannerMenuDescktop';
import './Banner.scss';
import { useTheme } from '../../provider/ThemeContext';

export const Banner = () => {
  const { theme } = useTheme();

  return (
    <div
      style={
        {
          ...theme,
        } as React.CSSProperties
      }
      className="banner"
    >
      <div className="container">
        <div className="banner__box">
          <div className="banner__wrapper">
            <div className="heading-wrapper">
              <img className="banner__photo" src={gamePhoto} alt="Game" />

              <div>
                <h1 className="banner__title">Lorem Ipsum is simply dummy</h1>

                <div className="buttons">
                  <Button icon={androidIcon}>Android</Button>
                  <Button icon={appleIcon}>IOS</Button>
                  <Button icon={downloadIcon}>Download on PC</Button>
                </div>
              </div>
            </div>

            <div className="circle-wrapper">
              <RatingCircle />
              <div className="circle-wrapper__text">
                <span className="circle-wrapper__players">Players</span>
                <br />
                <span className="circle-wrapper__votes">12 votes</span>
                <br />
                <span className="circle-wrapper__rating">
                  Your rating:
                  <span className="circle-wrapper__rating--level"> 5.2</span>
                </span>
              </div>
            </div>
          </div>

          <BannerMenu />
          <BannerMenuDescktop />
        </div>
      </div>
    </div>
  );
};
