import React from 'react';

import Button from './Button';

import '../styles/Header.css';


const Header = () => {
  return (
    <header className='header'>
      <div className="header-main">
        <div className='button-container'>
          <Button text='London' />
          <Button text='New Delhi' />
          <Button text='New York' />
          <Button text='São Paulo' />
          <Button text='Sydney' />
        </div>
        <div className='information-container'>
          <img
            className='header-icon'
            src='./src/icons/header-icon.svg'
          />
          <div className="infos">
            <span className='language'>BR</span>
            <span className='pipe'></span>
            <span>°C</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
