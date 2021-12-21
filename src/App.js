import React from 'react';
import useWeather from './hooks/useWeather';

const iconImage = 'http://openweathermap.org/img/wn/10d@2x.png';

const App = () => {
  const { cityData } = useWeather();

  console.log(cityData);

  return (
    <>
      <h1>React App!!! BR | °C</h1>
      <img src={ iconImage } style={ {width: '100px'} }/>
    </>
  );
}

export default App;
