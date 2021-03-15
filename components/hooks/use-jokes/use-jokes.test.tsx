import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ToggleBetweenRemoteAndLocal } from './use-jokes.compositions';

const localJokesText = 'save a few jokes';

describe('use-jokes', () => {
  it('should show remote jokes as the default', async () => {
    const { getByTestId } = render(<ToggleBetweenRemoteAndLocal />);
    const jokesContainer = getByTestId('jokes-container');
    await waitFor(() => expect(jokesContainer.innerHTML).toBeTruthy());
    await waitFor(() =>
      expect(jokesContainer.innerHTML).not.toMatch(localJokesText)
    );
  });

  it('should toggle between local and remote jokes', async () => {
    const { getByTestId } = render(<ToggleBetweenRemoteAndLocal />);
    const toggleButton = getByTestId('toggle-button');
    const jokesContainer = getByTestId('jokes-container');
    fireEvent.click(toggleButton);
    await waitFor(() =>
      expect(jokesContainer.innerHTML).toMatch(localJokesText)
    );
    fireEvent.click(toggleButton);
    await waitFor(() =>
      expect(jokesContainer.innerHTML).not.toMatch(localJokesText)
    );
  });
});
