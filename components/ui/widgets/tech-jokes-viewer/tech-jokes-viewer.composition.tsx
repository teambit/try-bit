import React, { useState } from 'react';
import { TechJokesViewer } from './tech-jokes-viewer';

import { AppBar } from '@our-org/tech-jokes.ui.elements.app-bar';

export const ToggleBetweenRemoteAndLocalJokes = () => {
  const [isLocal, setIsLocal] = useState(false);

  const menuItems = [
    { label: 'Explore New Jokes', action: () => setIsLocal(false) },
    { label: 'Saved Jokes', action: () => setIsLocal(true) },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <AppBar items={menuItems} style={{ marginBottom: '25px' }} />
        <TechJokesViewer local={isLocal} />
      </div>
    </div>
  );
};

export const RemoteJokes = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TechJokesViewer local={false} />
      </div>
    </div>
  );
};

export const LocalJokes = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TechJokesViewer local={true} />
      </div>
    </div>
  );
};
