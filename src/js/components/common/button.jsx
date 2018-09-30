import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonText, clickCallback } = props;
  return (
    <button type="button" onClick={clickCallback}>{buttonText}</button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  clickCallback: PropTypes.func.isRequired,
};

export default Button;
