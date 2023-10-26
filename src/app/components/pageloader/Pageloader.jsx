import React from 'react';
import styles from './Pageloader.module.css'; // You can style your loader using CSS modules or any styling method you prefer

const PageLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default PageLoader;
