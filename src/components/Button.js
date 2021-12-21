import React from 'react';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import weatherContext from '../context/weatherContext'

const Button = ({ text }) => {
  const { setCityName } = useContext(weatherContext);
  return (
    <button
      onClick={() => setCityName(text)}
      className='button'
    >
      { text }
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
