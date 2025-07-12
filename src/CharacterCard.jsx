import React from 'react';

function CharacterCard({ name, power, weakness, themeColor, lore, avatar, selectedClass }) {
  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid #fff',
    padding: '12px',
    borderRadius: '8px',
    margin: '10px auto',
    width: '280px',
    fontFamily: "'Press Start 2P', monospace",
    backgroundColor: themeColor || '#222',
    color: '#fff',
    textAlign: 'center',
    boxShadow: '0 0 8px #000',
  };

  const effectClass = {
    'Mago': 'magic-effect',
    'Guerreiro': 'fire-effect',
    'Arqueiro': 'wind-effect',
    'Guardião': 'guard-effect',
  }[selectedClass] || '';

  return (
    <div style={cardStyle}>
      <div className={`card-effect ${effectClass}`}></div>
      <div style={{ fontSize: '32px', marginBottom: '8px' }}>{avatar}</div>
      <p>⚔️ <strong>Nome:</strong> {name}</p>
      <p>🔮 <strong>Poder:</strong> {power}</p>
      <p>🧱 <strong>Fraqueza:</strong> {weakness}</p>
      <p>🏹 <strong>Classe:</strong> {selectedClass}</p>
      {lore && (
        <p style={{ marginTop: '12px', fontSize: '10px', lineHeight: '1.5' }}>📜 <em>{lore}</em></p>
      )}
    </div>
  );
}

export default CharacterCard;