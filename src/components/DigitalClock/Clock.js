import React from 'react';
import format from 'date-fns/format';

function Clock() {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(()=>{
    const cleanUp = window.setInterval(()=>{
        console.log("timer running")
        setTime(new Date())
    }, 1000)

    return ()=>{
        window.clearInterval(cleanUp) 
    }
    },[])
    
    return (
        <p className="clock">
        {format(time, 'hh:mm:ss a')}
        </p>
    );
}

export default Clock;