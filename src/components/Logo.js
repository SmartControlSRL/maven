import React from 'react';

const Logo = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#6A11CB', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#2575FC', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M 10 90 L 30 70 L 50 90 L 70 70 L 90 90 L 90 10 L 70 30 L 50 10 L 30 30 L 10 10 Z" fill="url(#logoGradient)" />
      <path d="M 10 90 L 50 50 L 90 90" fill="none" stroke="#FFFFFF" strokeWidth="5" />
    </svg>
  );
};

export default Logo;
