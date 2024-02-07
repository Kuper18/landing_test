import React from 'react';

import './RatingCircle.scss';

export const RatingCircle = () => {
  return (
    <div className="rating">
      6.4
      <svg
        width="99"
        height="99"
        viewBox="0 0 99 99"
        version="1.1"
        style={{
          transform: 'rotate(-90deg)',
          position: 'absolute',
          top: '-13.5px',
          left: '-13.5px',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradientColor">
            <stop offset="0" stopColor="#DC4A19" />
            <stop offset="100%" stopColor="#FCC539" />
          </linearGradient>
        </defs>
        <circle
          r="39.5"
          cx="49.5"
          cy="49.5"
          fill="transparent"
          stroke="#00000044"
          strokeWidth="8"
          strokeDasharray="244.92px"
          strokeDashoffset="0"
        />
        <circle
          r="39.5"
          cx="49.5"
          cy="49.5"
          stroke="url(#gradientColor)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDashoffset="88px"
          fill="transparent"
          strokeDasharray="244.92px"
        />
      </svg>
    </div>
  );
};
