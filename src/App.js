import { useContext } from 'react';
import weatherContext from './context/weatherContext'

const iconImage = 'http://openweathermap.org/img/wn/10d@2x.png';

const App = () => {
  const { setCityName, cityData } = useContext(weatherContext);

  return (
    <>
      <h1>React App!!! BR | °C</h1>
      <img src={ iconImage } style={ {width: '100px'} }/>
    </>
  );
}

export default App;
