import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { RetrieveJokes } from './use-remote-jokes.compositions';

describe('use-jokes', () => {
  it('should retrieve jokes', async () => {
    const { getByTestId } = render(<RetrieveJokes />);
    const fetchJokesBtn = getByTestId('fetch-button');
    const jokesContainer = getByTestId('jokes-container');
    fireEvent.click(fetchJokesBtn);
    await waitFor(() => expect(jokesContainer.innerHTML).toBeTruthy());
    const jokesContainerSnapshot = jokesContainer.innerHTML;
    fireEvent.click(fetchJokesBtn);
    await waitFor(() =>
      expect(jokesContainer.innerHTML).not.toEqual(jokesContainerSnapshot)
    );
  });
});
