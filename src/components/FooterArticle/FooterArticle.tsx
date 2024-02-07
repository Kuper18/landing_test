import React from 'react';
import './FooterArticle.scss';

const items = [1, 2, 3, 4, 5, 6];

type Props = {
  children: React.ReactNode;
};

export const FooterArticle: React.FC<Props> = ({ children }) => {
  return (
    <article className="footer-article">
      <h2 className="footer-article__title">{children}</h2>

      <ul className="footer-article__list">
        {items.map((item) => (
          <li className="footer-article__item" key={item}>
            <a className="footer-article__link" href="/#">
              link
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};
