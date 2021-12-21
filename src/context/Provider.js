import React from 'react';
import PropTypes from 'prop-types';
import weatherContext from './weatherContext';
import useWeather from '../hooks/useWeather';

const Provider = ({ children }) => {
  const { setCityName, cityData } = useWeather();

  const contextValue = { setCityName, cityData };

  return (
    <weatherContext.Provider value={ contextValue }>
      { children }
    </weatherContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
