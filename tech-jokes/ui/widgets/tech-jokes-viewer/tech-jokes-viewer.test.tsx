import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { RemoteJokes, LocalJokes } from './tech-jokes-viewer.composition';

describe('tech jokes viewer', () => {
  it('should render remote jokes correctly', async () => {
    const { getByTestId } = render(<RemoteJokes />);
    const remoteJokes = getByTestId('remote-jokes');
    await waitFor(() => expect(remoteJokes).toBeInTheDocument());
  });

  it('should render local jokes correctly', () => {
    const { getByTestId } = render(<LocalJokes />);
    const remoteJokes = getByTestId('local-jokes');
    expect(remoteJokes).toBeInTheDocument();
  });
});
