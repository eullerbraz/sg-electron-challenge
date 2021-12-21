import React from 'react';

import Button from './Button';

const Header = () => {
  return (
    <header className='header'>
      <div className='button-container'>
        <Button text='London' />
        <Button text='New Delhi' />
        <Button text='New York' />
        <Button text='São Paulo' />
        <Button text='Sydney' />
      </div>
      <div className='information-container'>
        <span>BR</span>
        <span>°C</span>
      </div>
    </header>
  );
};

export default Header;
