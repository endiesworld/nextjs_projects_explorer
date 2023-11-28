import React from 'react';

import styles from './Card.module.css';

function Card({
    elevation = 2, // 1 | 2 | 3
    children,
    }) {
    const boxShadow = `var(--elevation-${elevation})`;

    return (
        <div
        className={styles.card}
        style={{ boxShadow }}
        >
        {children}
        </div>
    );
}

export default Card;