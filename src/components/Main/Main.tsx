import React from 'react';
import { BreadCrumb } from '../BreadCrumb';
import { CardList } from '../CardList';
import './Main.scss';

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__box">
          <div className="main__wrapper">
            <BreadCrumb />
            <section className="section">
              <h2 className="section__title">Lorem Ipsum is simply dummy</h2>
              <p className="section__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </section>

            <article className="article">
              <h2 className="article__title">Similar articles</h2>

              <CardList />
            </article>
          </div>

          <article className="ads-card" />
        </div>
      </div>
    </main>
  );
};
