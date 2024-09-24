import React from 'react';
import { AppProvider } from './AppContext';  
import ChildContCompon from './ChildContextComponent'; 

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
