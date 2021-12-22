import React from 'react';

import Card from './Card';

import '../styles/Main.css';

const Main = () => {
  return (
    <main className='main'>
      <img
        className='logo'
        src='./src/icons/logo.svg'
      />
      <Card />
    </main>
  );
}

export default Main;
