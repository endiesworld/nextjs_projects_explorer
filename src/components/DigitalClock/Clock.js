import React from 'react';
import format from 'date-fns/format';

import useTime from './useCostumHook';

function Clock() {
    const time = useTime()
    
    return (
        <p className="clock">
        {format(time, 'hh:mm:ss a')}
        </p>
    );
}

export default Clock;