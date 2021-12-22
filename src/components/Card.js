import React, { useContext } from 'react';
import weatherContext from '../context/weatherContext';

const Card = () => {
  const { cityData } = useContext(weatherContext);
  
  if (!cityData.name) return null;

  const {
    name,
    time,
    main: {
      feels_like: feelsLike,
      humidity,
      temp,
      temp_min: tempMin,
      temp_max: tempMax,
    },
    clouds: {
      all: cloudiness,
    },
    weather: [{
      description,
      icon,
    }]
  } = cityData

  const renderCardInfoTitle = () => {
    return (
      <div className='card-info-title'>
        <h1 className='city'>{ name }</h1>
        <span className='time'>{ time }</span>
      </div>
    );
  }

  const renderCardInfoSubtitle = (text, value) => {
    return (
      <div className='card-info-subtitle'>
        <h2 className={ `subtitle` }>{ text }</h2>
        <span className='subtitle-value'>{ value }</span>
      </div>
    );
  }

  const renderCardInfoSubtitles = () => {
    return (
      <div className='card-info-subtitles'>
        { renderCardInfoSubtitle('Sensação Térmica:', `${parseInt(feelsLike)}ºC`) }
        { renderCardInfoSubtitle('Umidade:', `${humidity}%`) }
        { renderCardInfoSubtitle('Nebulosidade:', `${cloudiness}%`) }
      </div>
    );
  }

  const renderWeatherDescription = () => {
    return (
      <div className='weather-description'>
        <img
          src={ `./src/icons/weather-icons/${icon}.svg` }
          className='description-icon'
        />
        <span className='description'>{ 'description text euller bruna muito grande isso aqui' }</span>
      </div>
    );
  }

  const renderTemperatureContainer = () => {
    return (
      <div className='temperature-container'>
        <span className='actual-temperature'>{ `${parseInt(temp)}ºC` }</span>
        <span className='max-min-temperature'>{ `${parseInt(tempMin)}º / ${parseInt(tempMax)}º` }</span>
      </div>
    );
  }

  const renderCardInfoText = () => {
    return (
      <div className='card-info-text'>
        { renderCardInfoTitle() }
        { renderCardInfoSubtitles() }
      </div>
    );
  }

  const renderCardInfoIcons = () => {
    return (
      <div className='card-info-icons'>
        { renderWeatherDescription() }
        { renderTemperatureContainer() }
      </div>
    );
  }

  return (
    <div className='card'>
      { renderCardInfoText() }
      { renderCardInfoIcons() }
    </div>
  );
};

export default Card;
