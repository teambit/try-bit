import React, { useEffect } from 'react';
import { useRemoteJokes } from './use-remote-jokes';
import styles from './use-remote-jokes-docs.module.scss';

export const RetrieveJokes = () => {
  const [getJoke, joke, disableGetJoke, error] = useRemoteJokes();

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div data-testid="jokes-container" className={styles.contentWrapper}>
      {error || joke}
      <div className={styles.buttonsWrapper}>
        <button
          data-testid="fetch-button"
          className={styles.button}
          disabled={disableGetJoke}
          onClick={getJoke}
        >
          {disableGetJoke ? 'loading...' : 'fetch a joke'}
        </button>
      </div>
    </div>
  );
};
