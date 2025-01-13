import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, link, color, hoverColor }) => {
  const navigate = useNavigate();  // Use `useNavigate` hook

  const buttonStyles = `px-6 py-3 rounded-full text-lg font-semibold ${color} hover:${hoverColor} transition duration-300`;

  const handleClick = () => {
    navigate(link);  // Programmatically navigate to the link
  };

  return (
    <button className={buttonStyles} onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
};

export default Button;
