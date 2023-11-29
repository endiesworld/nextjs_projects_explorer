import React from 'react';
import style from './Toggle.module.css'

function Toggle({
    label,
    checked,
    className,
    ...delegated
    }) {
    const id = React.useId();
    
    // This style updates the UI, to move the ball
    // and indicate whether it's toggled or not.
    const ballStyle = {
        transform: checked
        ? `translateX(100%)`
        : `translateX(0%)`,
    };
    
    return (
        <div className={style.wrapper}>
        <label
            htmlFor={id}
            className={style.label}
        >
            {label}
        </label>
        <button
            {...delegated}
            id={id}
            className={`${style.toggle} ${className}`}
            type="button"
            aria-pressed={checked}
        >
            <span className={style.ball} style={ballStyle} />
        </button>
        </div>
    );
}

export default Toggle;