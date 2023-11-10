import React from 'react';

export default function useTime(){
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

    return time
}