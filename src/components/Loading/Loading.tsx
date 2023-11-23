"use client";

import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
