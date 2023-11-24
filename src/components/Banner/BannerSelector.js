import React from 'react';

import styles from './Banner.module.css';

function BannerComponent({ type, children }) {
  const backgroundColor =
    type === 'success'
      ? 'var(--color-success)'
      : 'var(--color-error)';
  
  return (
    <div
      className={styles.banner}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
}

export function LoggedInBanner({
  type,
  user,
  children,
}) {
  if (
    !user ||
    user.registrationStatus === 'unverified'
  ) {
    return null;
  }
  
  return <BannerComponent type={type}>{children}</BannerComponent>;
}

export default BannerComponent;