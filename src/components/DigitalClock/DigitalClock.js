import React from 'react';

import Clock from './Clock'

function DigitalClock() {
  const [showClock, setShowClock] = React.useState(true);
  return (
  <div className='wrapper'>
    <button
        className="clock-toggle"
        onClick={() => setShowClock(!showClock)}
      >
        {showClock ? 'Clock ON' : 'Clock OFF'}
      </button>
      
      {showClock && <Clock />}
  </div>
);
}

export default DigitalClock;
