import React from 'react';

import styles from './Toasty.module.css';


function Toasty() {
    // Your goal is to update the `isShown` state variable,
    // based on the user's scroll position, using
    // IntersectionObserver.
    const [isShown, setIsShown] = React.useState(false);
    const my_ref = React.useRef();
    
    React.useEffect(()=>{
        
        const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
        // Show character
        setIsShown(true)
        } else {
        // Hide character
        setIsShown(false)
        }
    });

    observer.observe(my_ref.current);

    return () => {
        observer.disconnect()
    };
    },[])
    
    // This CSS value will control whether the ghost is
    // visible or not.
    const translateX = isShown
        ? '0%'
        : '100%';
    
    return (
        <div  ref={my_ref} className={styles.wrapper} >
        <div
            className={styles.character}
            style={{
            transform: `translateX(${translateX})`,
            }}
        >
            👻
        </div>
        </div>
    );
}

export default Toasty;

