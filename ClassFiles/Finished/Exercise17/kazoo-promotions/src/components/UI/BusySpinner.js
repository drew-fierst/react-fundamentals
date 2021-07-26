import React from 'react';

import styles from './BusySpinner.module.css';

const LoadingIndicator = () => (
  <div className={styles.loadRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingIndicator;
