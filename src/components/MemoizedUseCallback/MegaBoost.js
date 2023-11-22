import React from 'react';
import style from './memoizedUseCallback.module.css';

function MegaBoost({ handleClick }) {
  console.log('Render MegaBoost');
  
  return (
    <button
      className={style.mega_boost_button}
      onClick={handleClick}
    >
      MEGA BOOST!
    </button>
  );
}

export default React.memo(MegaBoost);