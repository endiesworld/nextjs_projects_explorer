import React from 'react';
import format from 'date-fns/format';

import useTime from './useCostumHook';
import style from './digitalClock.module.css'

function Clock() {
    const time = useTime()
    
    return (
        <p className={style.clock}>
        {format(time, 'hh:mm:ss a')}
        </p>
    );
}

export default Clock;