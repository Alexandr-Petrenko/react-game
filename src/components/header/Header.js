import React from 'react';

import './Header.scss';

export const Header = ({
    score,
}) => (
  <header className={'header'}>
      <div className="header__score">
          Your score: <span className='header__text'> { score } </span>
      </div>
  </header>
);
