import React, { useContext } from 'react';
import { TermsContext } from '../../context/termsContext';
import styles from './SiteTerms.module.css';

const Terms = props => {
  const termsContext = useContext(TermsContext);

  const acceptHandler = () => {
    termsContext.accept();
  };

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