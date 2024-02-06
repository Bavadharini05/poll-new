import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Polling.css';

function Polling() {
  const navigate = useNavigate();

  // Use state to manage poll data
  const [pollData, setPollData] = useState({
    kishoreKumar: 0,
    arRahman: 0,
    shreyaGhoshal: 0,
    sonuNigam: 0,
    mohammadRafi: 0,
    lataMangeshkar: 0,
    arijitSingh: 0,
    ashaBhosle: 0,
  });

  // Function to handle vote
  const handleVote = (pollOption) => {
    setPollData((prevData) => ({
      ...prevData,
      [pollOption]: prevData[pollOption] + 1,
    }));
  };

  // Function to handle logout
  const handleLogout = () => {
    // Navigate to the home page on logout
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Indian Singers Poll</h2>

      {/* Kishore Kumar Poll */}
      <div>
        <h3>Kishore Kumar Poll</h3>
        <p>{`Votes: ${pollData.kishoreKumar}`}</p>
        <button onClick={() => handleVote('kishoreKumar')}>Vote</button>
      </div>

      {/* A.R. Rahman Poll */}
      <div>
        <h3>A.R. Rahman Poll</h3>
        <p>{`Votes: ${pollData.arRahman}`}</p>
        <button onClick={() => handleVote('arRahman')}>Vote</button>
      </div>

      {/* Shreya Ghoshal Poll */}
      <div>
        <h3>Shreya Ghoshal Poll</h3>
        <p>{`Votes: ${pollData.shreyaGhoshal}`}</p>
        <button onClick={() => handleVote('shreyaGhoshal')}>Vote</button>
      </div>

      {/* Sonu Nigam Poll */}
      <div>
        <h3>Sonu Nigam Poll</h3>
        <p>{`Votes: ${pollData.sonuNigam}`}</p>
        <button onClick={() => handleVote('sonuNigam')}>Vote</button>
      </div>

      {/* Mohammad Rafi Poll */}
      <div>
        <h3>Mohammad Rafi Poll</h3>
        <p>{`Votes: ${pollData.mohammadRafi}`}</p>
        <button onClick={() => handleVote('mohammadRafi')}>Vote</button>
      </div>

      {/* Lata Mangeshkar Poll */}
      <div>
        <h3>Lata Mangeshkar Poll</h3>
        <p>{`Votes: ${pollData.lataMangeshkar}`}</p>
        <button onClick={() => handleVote('lataMangeshkar')}>Vote</button>
      </div>

      {/* Arijit Singh Poll */}
      <div>
        <h3>Arijit Singh Poll</h3>
        <p>{`Votes: ${pollData.arijitSingh}`}</p>
        <button onClick={() => handleVote('arijitSingh')}>Vote</button>
      </div>

      {/* Asha Bhosle Poll */}
      <div>
        <h3>Asha Bhosle Poll</h3>
        <p>{`Votes: ${pollData.ashaBhosle}`}</p>
        <button onClick={() => handleVote('ashaBhosle')}>Vote</button>
      </div>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Polling;
