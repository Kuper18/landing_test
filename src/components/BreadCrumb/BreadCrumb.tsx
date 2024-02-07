import React from 'react';

import './BreadCrumb.scss';

export const BreadCrumb = () => {
  return (
    <div className="bread-crumb">
      <a className="bread-crumb__link" href="/">Home </a>
      <i className="fa-solid fa-angle-right fa-2xs" />
      <a className="bread-crumb__link" href="/"> Lorem Ipsum is </a>
      <i className="fa-solid fa-angle-right fa-2xs" />
      <span className="text"> Lorem Ipsum is simply dummy</span>
    </div>
  );
};
