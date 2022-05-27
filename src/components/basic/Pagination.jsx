import React from 'react';
import './style.css';
import left from '@/assets/left.svg';
import right from '@/assets/right.svg';

const Pagination = ({ ...rest }) => {
  return (
    <div {...rest} className='pagination-box'>
      <button>
        <img src={left} />
      </button>
      <div>
        <span>2</span>
        of
        <span>7</span>
      </div>
      <button>
        <img src={right} />
      </button>
    </div>
  );
};

export default Pagination;
