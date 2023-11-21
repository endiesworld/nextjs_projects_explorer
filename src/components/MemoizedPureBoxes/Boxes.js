import React from 'react';
import style from './memoized_box.module.css';

function Boxes({ boxes }) {
  console.log('Render Boxes');
  
  return (
    <div className={style.boxes_wrapper}>
      {boxes.map((boxStyles, index) => (
        <div
          key={index}
          className={style.box}
          style={boxStyles}
        />
      ))}
    </div>
  );
}

export default Boxes;