import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SaveAndRemoveJokes } from './use-local-jokes.compositions';

const emptyStorageTxt = 'save a few jokes';
const jokeToBeSaved = 'knock knock...';

describe('use local jokes', () => {
  it('should initialize with a local storage empty of jokes', () => {
    const { getByTestId } = render(<SaveAndRemoveJokes />);
    const jokesContainer = getByTestId('jokes-container');
    expect(jokesContainer.innerHTML).toMatch(emptyStorageTxt);
  });

  it('should save and remove a joke to the local storage', () => {
    const { getByTestId } = render(<SaveAndRemoveJokes />);
    const saveJokesBtn = getByTestId('save-joke');
    const removeJokesBtn = getByTestId('remove-joke');
    const jokesContainer = getByTestId('jokes-container');
    fireEvent.click(saveJokesBtn);
    expect(jokesContainer.innerHTML).toMatch(jokeToBeSaved);
    fireEvent.click(removeJokesBtn);
    expect(jokesContainer.innerHTML).toMatch(emptyStorageTxt);
  });
});
