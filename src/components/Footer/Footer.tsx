import React from 'react';
import { useTheme } from '../../provider/ThemeContext';
import logo_light from '../../images/icons/Logo.svg';
import logo_dark from '../../images/icons/Logo-dark.svg';
import { FooterArticle } from '../FooterArticle/FooterArticle';
import { FooterListIcon } from '../FooterListIcon/FooterListIcon';
import './Footer.scss';

export const Footer = () => {
  const { themeType } = useTheme();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <article className="footer__text">
            <div className="image-block">
              <img
                className="footer__logo"
                src={themeType === 'dark' ? logo_light : logo_dark}
                alt="Logo"
              />
            </div>

            <p className="text-block">
              <span className="text-block__span">
                Lorem Ipsum is simply dummy
              </span>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
            </p>

            <FooterListIcon />
          </article>

          <div>
            <div className="article-wrapper">
              <FooterArticle>Categhory</FooterArticle>
              <FooterArticle>Play better</FooterArticle>
              <FooterArticle>Useful links</FooterArticle>
            </div>
            <p className="copyrating">
              Copyright © 2024. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
