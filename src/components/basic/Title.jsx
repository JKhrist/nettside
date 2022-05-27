import React from 'react';
import './style.css';

const Title = ({ children, ...rest }) => {
  return <h1 {...rest}>{children}</h1>;
};

export default Title;
