import React from "react";
import styles from "./Pageloader.module.css";

const PageLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default PageLoader;
