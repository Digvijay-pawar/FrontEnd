// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [balance, setBalance] = useState(0);
  const [sessionId, setSessionId] = useState('');
  const [timer, setTimer] = useState(60);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [betAmount, setBetAmount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch user balance and current session on component mount
    fetchUserData();
    fetchCurrentSession();

    // Start a timer to update the session and user balance every minute
    const interval = setInterval(() => {
      fetchCurrentSession();
      fetchUserData();
    }, 60000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const fetchUserData = () => {
    // Fetch user balance
    axios.get('http://localhost:5000/get-user-data')
      .then((response) => {
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  const fetchCurrentSession = () => {
    // Fetch current session and timer
    axios.post('http://localhost:5000/start-game')
      .then((response) => {
        setSessionId(response.data.sessionId);
        setTimer(60);
      })
      .catch((error) => {
        console.error('Error fetching current session:', error);
      });
  };

  const handleColorSelection = (color) => {
    // Handle color selection logic
    setSelectedColor(color);
  };

  const handleNumberSelection = (number) => {
    // Handle number selection logic
    setSelectedNumber(number);
  };

  const handleBet = () => {
    // Handle bet logic
    if (selectedColor || selectedNumber !== null) {
      axios.post('http://localhost:5000/place-bet', {
        sessionId,
        color: selectedColor,
        number: selectedNumber,
        betAmount,
      })
      .then((response) => {
        // Handle success response (if needed)
      })
      .catch((error) => {
        console.error('Error placing bet:', error);
      });
    }
  };

  const refreshBalance = () => {
    // Fetch and update user balance
    fetchUserData();
  };

  return (
    <div>
      <h1>Color Prediction Game</h1>
      <div>
        <p>Balance: ${balance}</p>
        <button onClick={refreshBalance}>Refresh Balance</button>
      </div>
      <p>Session ID: {sessionId}</p>
      <p>Time Remaining: {timer} seconds</p>
      <div>
        <button onClick={() => handleColorSelection('red')}>Red</button>
        <button onClick={() => handleColorSelection('violet')}>Violet</button>
        <button onClick={() => handleColorSelection('green')}>Green</button>
      </div>
      <div>
        {[0, 1, 2, 3, 4, 6, 7, 8, 9].map((number) => (
          <button key={number} onClick={() => handleNumberSelection(number)}>
            {number}
          </button>
        ))}
      </div>
      <div>
        <input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
        />
        <button onClick={handleBet}>Place Bet</button>
      </div>
      <div>
        <h2>History</h2>
        <ul>
          {history.map((item) => (
            <li key={item._id}>
              Session: {item.sessionId}, Bet Amount: {item.betAmount}, Result: {item.isWinner ? 'Win' : 'Loss'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
