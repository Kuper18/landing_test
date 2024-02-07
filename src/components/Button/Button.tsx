import React from 'react';
import './Button.scss';

type Props = {
  icon: string;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children, icon }) => {
  return (
    <button type="button" className="button">
      <img src={icon} alt="Icon" />
      {children}
    </button>
  );
};
