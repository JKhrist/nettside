import React from 'react';
import './style.css';

const Radio = ({ options, currentRadioVal, onChange, ...rest }) => {
  return (
    <div {...rest} className='react-radio'>
      {options.map((item) => (
        <label
          className={
            currentRadioVal === item.value
              ? 'react-radio-item active-radio'
              : 'react-radio-item'
          }
          htmlFor={item.id}
          key={item.id}>
          <input
            type='radio'
            name='choices'
            id={item.id}
            value={item.value}
            onChange={onChange}
          />
          <span className='numeric'>{item.numeric}</span>
          <span>{item.name}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
