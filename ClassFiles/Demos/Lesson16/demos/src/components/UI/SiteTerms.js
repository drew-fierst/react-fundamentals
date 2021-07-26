import React from 'react';

import styles from './SiteTerms.module.css';

const Terms = props => {
  const acceptHandler = () => {};

  return (
    <div className={styles.termsWrapper}>
      <div className={styles.card}>
        <h2>Site Terms of Use</h2>
        <p>By clicking the button below you agree to our site terms of use.</p>
        <button onClick={acceptHandler}>Accept</button>
      </div>
    </div>
  );
};

export default Terms;