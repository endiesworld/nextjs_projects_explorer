import React from 'react';
import useIsOnscreen from './use-is-onscreen.js';
import style from './intersection.module.css'

function IntersectionObserver() {
  const [isOnscreen, comRef] = useIsOnscreen();

  return (
    <div className={style.wrapper}>
    <header style={{
        
        height: '20px'
      }}>Red box visible: {isOnscreen ? 'YES' : 'NO'}</header>
      <div className={style.wrapper_2}>
        
        <div className={style.container}>
          <div ref={comRef} className={style.red_box} />
        </div>
      </div>
    </div>
  );
}

export default IntersectionObserver;
