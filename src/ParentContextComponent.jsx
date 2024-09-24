// ParentComponent.js
import React from 'react';
import { AppProvider } from './AppContext';  // Import the context provider
import ChildContCompon from './ChildContextComponent'; // Import the child component

const ParentContCompon = () => {
  return (
    <AppProvider>
      <div>
        <h1>Parent Component</h1>
        <ChildContCompon />
      </div>
    </AppProvider>
  );
};

export default ParentContCompon;
