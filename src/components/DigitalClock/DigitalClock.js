import React from 'react';

import Clock from './Clock'
import useToggle from './useTogle';

function DigitalClock() {
  const [value, tuggleValue] = useToggle (true);
  return (
  <div className='wrapper'>
    <button
        className="clock-toggle"
        onClick={tuggleValue}
      >
        {value? 'Clock ON' : 'Clock OFF'}
      </button>
      
      {value && <Clock />}
  </div>
);
}

export default DigitalClock;
