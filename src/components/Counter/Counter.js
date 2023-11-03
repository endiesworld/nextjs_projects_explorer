import React from 'react';

import CounterComponent from './Countercomponent'

function Counter() {
  const [name, setName] = React.useState('Emmanuel');
  
  return (
    <div className='wrapper'>
      <CounterComponent name={name}/>
    </div>
  );
}

export default Counter;
