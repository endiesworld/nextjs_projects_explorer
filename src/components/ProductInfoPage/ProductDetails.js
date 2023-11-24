import React from 'react';
import { Star } from 'react-feather';

import { range } from './utils';
import VisuallyHidden from './VisuallyHidden';
import style from './product.module.css'

function ImageSelector({product}){
  const [
    selectedPhotoIndex,
    setSelectedPhotoIndex,
  ] = React.useState(0);
  return(
    <div >
          <img
            className={style.primary_photo}
            alt=""
            src={product.photos[selectedPhotoIndex]}
          />
          <div className={style.product_buttons}>
            {product.photos.map((photoSrc, index) => {
              const isSelected = selectedPhotoIndex === index;
  
              return (
                <button
                  key={index}
                  className={style.thumbnail_button}
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <VisuallyHidden>
                    Toggle image #{index + 1}
                  </VisuallyHidden>
                  <img alt="" src={photoSrc} />
                  <span
                    className={style.selected_ring}
                    style={{
                      opacity: isSelected ? 1 : 0,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
  )
}

function StarRating({rating}){
  return (
    <div className={style.star_rating}>
          {range(5).map((num) => {
            const className =
              rating > num
                ? style.star_filled
                : 'star hollow';
            return <Star className={className} />;
          })}
        </div>
  )
}

function ProductDetails({ product }) {
  
  return (
    <article className={style.product_details}>
      <div className={style.photos_wrapper}>
        <ImageSelector product={product} />
      </div>
      <div className={style.product_info}>
        <h1>{product.title}</h1>
        <StarRating rating={product.rating} />
        <p className={style.product_description}>
          {product.description}
        </p>
      </div>
    </article>
  );
}

export default ProductDetails;