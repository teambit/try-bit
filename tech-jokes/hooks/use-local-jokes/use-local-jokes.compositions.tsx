import React, { useEffect } from 'react';
import styles from './use-local-jokes-docs.module.scss';
import { useLocalJokes } from './use-local-jokes';

export const SaveAndRemoveJokes = () => {
  const [getJoke, joke, error, saveJoke, removeJoke] = useLocalJokes();

  const jokeExample = 'knock knock...';

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div data-testid="jokes-container" className={styles.contentWrapper}>
      {error || joke}
      <div className={styles.buttonsWrapper}>
        <button
          data-testid="save-joke"
          className={styles.button}
          onClick={() => saveJoke(jokeExample, getJoke)}
        >
          {'save joke'}
        </button>
        <button
          data-testid="remove-joke"
          className={styles.button}
          onClick={() => removeJoke(joke, getJoke)}
        >
          {'remove joke'}
        </button>
      </div>
    </div>
  );
};
