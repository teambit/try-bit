import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppBarWithLogo } from './app-bar.composition';

describe('app bar', () => {
  it('should render the app bar', () => {
    const { getByTestId } = render(<AppBarWithLogo />);
    const appBar = getByTestId('app-bar');
    expect(appBar).toBeInTheDocument();
  });
});
