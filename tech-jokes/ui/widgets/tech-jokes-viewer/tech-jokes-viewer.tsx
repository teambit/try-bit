import React, { useEffect } from 'react';
import { Button } from '@our-org/tech-jokes.ui.elements.button';
import { useJokes } from '@our-org/tech-jokes.hooks.use-jokes';

import styles from'./tech-jokes-viewer.module.scss';

export type BadJokesProps = {
  local: boolean;
};

/** Retrieves and displays bad jokes */
export const TechJokesViewer = ({ local }: BadJokesProps) => {
  const [
    setIsLocal,
    getJoke,
    joke,
    error,
    isLoading,
    saveJoke,
    removeJoke,
  ] = useJokes(local);

  const renderJoke = (text: string) => {
    const textArr = text.split('\n');
    return textArr.map((line, key) => <p key={key}>{line}</p>);
  };

  useEffect(() => {
    setIsLocal(local);
  }, [local]);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>{error || renderJoke(joke)}</div>
      <div className={styles.buttonsWrapper}>
        <Button isLoading={isLoading} onClick={getJoke}>
          Another one, please
        </Button>
        <Button
          variant="secondary"
          isLoading={isLoading}
          onClick={() =>
            local ? removeJoke(joke, getJoke) : saveJoke(joke, getJoke)
          }
        >
          {local ? 'remove joke' : 'save joke'}
        </Button>
      </div>
    </div>
  );
};
