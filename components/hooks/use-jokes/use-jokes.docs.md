---
description: Fetches jokes and manages saved jokes in the local storage.
labels: ['react', 'hook', 'jokes']
---

import { useEffect } from 'react';
import { useJokes } from './use-jokes'
import styles from './use-jokes-docs.module.scss'

> This is the documentation for the 'use-jokes' component (hook). It uses MDX to combine JSX with Markdown.

### use-jokes returns an array with the following:

1. A function to toggle between remote/local jokes `(local: boolean) => void`
2. A function that retrieves a joke `() => void`
3. The retrieved joke `string`
4. An error message `string`
5. An indicator: is it possible to retrieve another joke? `boolean`
6. A function that saves a joke in the local storage `(joke: string, callback?: () => any) => void`
7. A function that removes a joke from the local storage `(joke: string, callback?: () => any) => void`

### Using the useJokes hook

#### Toggle between local and remote jokes using the 'local' prop.

> This is a live playground. Adding `live` to your codeblock turns it into a live playground.

```jsx live
// Assign 'true' to the 'local' prop, to switch to locally stored jokes.
({ local = false }) => {
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
      <div className={styles.contentWrapper}>{error || joke}</div>
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.button}
          disabled={disableGetJoke}
          onClick={getJoke}
        >
          {disableGetJoke ? 'loading...' : 'fetch joke'}
        </button>
        <button
          className={styles.button}
          disabled={disableGetJoke}
          onClick={() =>
            local ? removeJoke(joke, getJoke) : saveJoke(joke, getJoke)
          }
        >
          {local ? 'remove joke' : 'save joke'}
        </button>
      </div>
    </div>
  );
};
```

<br />

> Below is a composition for the 'use-jokes' component (embedded in the docs by the environment's doc template).  
> This composition validates that the 'use-jokes' allows to toggle between stored jokes and remote jokes.  
> That's our way to ensure we deliver a component than behaves "as promised" when consumed by others.  
> Explore it further in the 'Compositions' tab.
