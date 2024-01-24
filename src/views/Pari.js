// App.js
import React, { useState } from 'react';
import AccountForm from './Account';
import Main from './Main'
// import './styles.css';

const App = () => {
  const [isAccountCreated, setAccountCreated] = useState(false);

  const handleAccountCreated = () => {
    setAccountCreated(true);
  };

  return (
    <div className="container">
      {isAccountCreated ? (
        // Render your main game components here
        // ...
        <h1>Main Game Components
        <Main></Main>

        </h1>
      ) : (
        <AccountForm onAccountCreated={handleAccountCreated} />
      )}
    </div>
  );
};

export default App;
