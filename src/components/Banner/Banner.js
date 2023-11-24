import React from 'react';

import { LoggedInBanner } from './BannerSelector';
import style from './Banner.module.css';

const EXAMPLE_USER = {
  name: 'Sayen',
  registrationStatus: 'verified',
};

function Banner() {
  return (
    <div className={style.wrapper}>
      <LoggedInBanner
      type="success"
      user={EXAMPLE_USER}
    >
      Successfully logged in! Welcome aboard, {EXAMPLE_USER.name}!
    </LoggedInBanner>
    </div>
    
  );
}

export default Banner;
