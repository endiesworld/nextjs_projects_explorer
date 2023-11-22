import React from 'react';
import style from './gridMouseEvent.module.css';

import { range } from './utils';

function Grid({ numRows, numCols }) {
  console.info('Grid render');
  
  return (
    <div className={style.grid_wrapper}>
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} className={style.row}>
          {range(numCols).map((colIndex) => (
            <div key={colIndex} className={style.cell} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default React.memo(Grid);