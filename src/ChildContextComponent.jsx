// ChildComponent.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';  // Import the context

const ChildContCompon = () => {
  const { user, setUser } = useContext(AppContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>User: {user}</p>
      <button onClick={() => setUser("John Doe")}>Change User</button>
    </div>
  );
};

export default ChildContCompon;
