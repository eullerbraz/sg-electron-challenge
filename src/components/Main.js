import React from 'react';
import Card from './Card';

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
