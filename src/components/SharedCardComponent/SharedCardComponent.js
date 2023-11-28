import React from 'react';

import UserProfileCard from './UserProfileCard';
import ProductInfoCard from './ProductInfoCard';
import style from './SharedCardComponent.module.css';

function SharedCardComponent() {
  return (
    <div className={style.wrapper}>
      <UserProfileCard
        user={{
          avatarSrc: 'https://sandpack-bundler.vercel.app/img/avatars/009.png',
          avatarDescription: 'Cartoon bear',
          name: 'Ben Thorn',
          handle: 'benjaminthorn',
        }}
      />
      <ProductInfoCard
        product={{
          id: 'hk123',
          imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
          imageAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
          title: '“Hello Kitty” Coffee Machine',
          price: '89.99',
          inStock: true,
        }}
      />
    </div>
  );
}

export default SharedCardComponent;
