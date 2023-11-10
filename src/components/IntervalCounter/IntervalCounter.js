import React from 'react';
import './styles.css';

function IntervalCounter() {
  const [count, setCount] = React.useState(0);

  // React.useEffect(() => {
  //   const intervalId = window.setInterval(() => {
  //     let nextVal = count + 1 ;
  //     setCount(nextVal);
  //   }, 1000);

  //   return () => {
  //     window.clearInterval(intervalId);
  //   };
    
  // }, [count]);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCount(currentValue => currentValue + 1 );
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
    
  }, []);

  return (
    <div className="timer">
      <h1>Seconds since load:</h1>
      <p>{count}</p>
    </div>
  );
}

export default IntervalCounter;
