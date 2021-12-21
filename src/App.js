import React, { useContext } from 'react';
import weatherContext from './context/weatherContext'
import Header from './components/Header';

const iconImage = 'http://openweathermap.org/img/wn/10d@2x.png';

const App = () => {
  const { setCityName, cityData } = useContext(weatherContext);

  return (
    <>
      <Header />
      <img src={ iconImage } style={ {width: '100px'} }/>
    </>
  );
}

export default App;
