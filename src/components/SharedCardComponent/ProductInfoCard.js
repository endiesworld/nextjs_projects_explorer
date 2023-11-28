import React from 'react';

import Card from './Card';
import styles from './ProductInfoCard.module.css';

function ProductInfoCard({ product }) {
    return (
        <Card elevation={3}>
        <div className={styles.wrapper}>
            <img
            className={styles.productPhoto}
            alt={product.imageAlt}
            src={product.imageSrc}
            />
            <h2>
            {product.title}
            </h2>
            <p className={styles.price}>
            ${product.price}
            </p>
            <button>
            Add to cart
            </button>
        </div>
        </Card>
    );
}

export default ProductInfoCard;