import { useState, useEffect } from 'react';
import { getCityTime } from '../helpers';

const CITIES = [
  'London',
  'New Delhi',
  'New York',
  'São Paulo',
  'Sydney',
];

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_PARAMS = '&appid=0100a1d7bddd55407c2f9b64e0fe7d08&units=metric&lang=pt_br';

const useWeather = () => {
  const [citiesData, setCitiesData] = useState([]);
  const [cityName, setCityName] = useState('London');
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    const getCityWeather = async (city) => {
      const endpoint = `${API_URL}${city}${API_PARAMS}`;
      const response = await fetch(endpoint);
      return await response.json();
    }

    const citiesPromises = CITIES
      .map((city) => getCityWeather(city));
    
    const getCitiesWeather = async () => {
      setCitiesData(
        await Promise.all(citiesPromises),
      );
    }

    getCitiesWeather();
  }, [cityName]);

  useEffect(() => {
    if (citiesData.length) {
      const city = citiesData.find(({ name }) => name === cityName);
      setCityData(
        {
          ...city,
          time: getCityTime(city.timezone),
        }
      );
    }
  }, [citiesData]);

  return { setCityName, cityData };
};

export default useWeather;
