import React from 'react';
import PropTypes from 'prop-types';
import './colorCard.css';

const ColorCard = ({ title, color }) => {
  return (
    <> 
   <div className="card">
   <div className="color-card" style={{ backgroundColor: color }}></div>
      <div className='card-title'>
      <h2>{color}</h2>
      <p>{title}</p> 
      </div>
   </div>
      </>
  );
};

ColorCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ColorCard;
