import React from 'react';

function CharacterCard({ name, power, weakness, themeColor }) {
  const cardStyle = {
    border: '2px solid #fff',
    padding: '12px',
    borderRadius: '8px',
    margin: '10px auto',
    width: '260px',
    fontFamily: "'Press Start 2P', monospace",
    backgroundColor: themeColor || '#222',
    color: '#fff',
    textAlign: 'center',
    boxShadow: '0 0 8px #000',
  };

  return (
    <div style={cardStyle}>
      <p>⚔️ <strong>Nome:</strong> {name}</p>
      <p>🔮 <strong>Poder:</strong> {power}</p>
      <p>🧱 <strong>Fraqueza:</strong> {weakness}</p>
    </div>
  );
}

export default CharacterCard;