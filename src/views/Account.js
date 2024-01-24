// AccountForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AccountForm = ({ onAccountCreated }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [initialBalance, setInitialBalance] = useState('');

  const handleCreateAccount = () => {
    if (!mobileNumber || !password || !initialBalance) {
      alert('Please fill in all fields');
      return;
    }

    axios.post('http://localhost:5000/create-user', {
      mobileNumber,
      password,
      initialBalance: parseFloat(initialBalance),
    })
    .then((response) => {
      alert('Account created successfully!');
      onAccountCreated();
    })
    .catch((error) => {
      console.error('Error creating account:', error);
      alert('Failed to create account. Please try again.');
    });
  };

  return (
    <div className="account-form">
      <h2>Create Account</h2>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="initialBalance">Initial Balance:</label>
        <input
          type="number"
          id="initialBalance"
          value={initialBalance}
          onChange={(e) => setInitialBalance(e.target.value)}
        />
      </div>
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default AccountForm;
