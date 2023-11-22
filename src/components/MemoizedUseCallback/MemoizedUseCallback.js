import React from 'react';

import MegaBoost from './MegaBoost';
import style from './memoizedUseCallback.module.css';

function MemoizedUseCallback() {
  const [count, setCount] = React.useState(0);

  // If we had written and ordinary function call, we would have the function declaration everytime the component is rendered,
  // Hence the MegaBoost component is rendered again 
  // const handleMegaBoost = () => {
  //   setCount((currentValue) => currentValue + 1234);
  // } ;

  const handleMegaBoost = React.useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, [])

  return (
    <div className={style.wrapper}>
      Count: {count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me!
      </button>
      <MegaBoost handleClick={handleMegaBoost} />
    </div>
  );
}

export default MemoizedUseCallback;
