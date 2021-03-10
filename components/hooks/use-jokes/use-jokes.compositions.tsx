// This is a component composition. Watch it rendered in your Workspace UI (https://localhost:300)
// For more informations, see: https://harmony-docs.bit.dev/compositions/overview

import React, { useEffect, useState } from 'react';
import { useJokes } from './use-jokes';

const styles = require('./use-jokes-docs.module.scss');

// This composition validates that the 'use-jokes' allows to toggle between stored jokes and remote jokes.
// That's our way to ensure we deliver a component than behaves "as promised" when consumed by others.
export const ToggleBetweenRemoteAndLocal = () => {
  const [isLocal, setIsLocal] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setIsLocal((prev) => !prev)}>
          Toggle between 'local' and 'remote'
        </button>
      </div>
      <GetJokes local={isLocal}></GetJokes>
    </div>
  );
};

const GetJokes = ({ local = false }) => {
  const [
    setIsLocal,
    getJoke,
    joke,
    error,
    disableGetJoke,
    saveJoke,
    removeJoke,
  ] = useJokes(local);

  useEffect(() => {
    setIsLocal(local);
  }, [local]);

  return (
    <div className={styles.example}>
      <h4>{local ? '[LOCAL]' : '[REMOTE]'}</h4>
      <div className={styles.contentWrapper}>{error || joke}</div>
    </div>
  );
};
