import React from 'react';

import styles from './Slider.module.css';

function Slider({ label, ...delegate }) {
    const id = React.useId();
    
    return (
        <div className={styles.wrapper}>
        <label
            htmlFor={id}
            className={styles.label}
        >
            {label}
        </label>
        <input
            type="range"
            id={id}
            className={styles.slider}
            {...delegate}
        />
        </div>
    );
}

export default Slider;