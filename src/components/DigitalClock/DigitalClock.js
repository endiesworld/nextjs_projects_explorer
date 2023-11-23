import React from 'react';

import Clock from './Clock'
import useToggle from './useTogle';
import style from './digitalClock.module.css'

function DigitalClock() {
  const [value, tuggleValue] = useToggle (true);
  return (
  <div className={style.wrapper}>
    <button
        className={style.tuggle_button}
        onClick={tuggleValue}
      >
        {value? 'Clock ON' : 'Clock OFF'}
      </button>
      
      {value && <Clock />}
  </div>
);
}

export default DigitalClock;
