import React from 'react';
import backgroundImage from './assets/images/montanhas-epicas.png';

function CharacterCard({ name, power, weakness, themeColor, lore, avatar, selectedClass }) {
  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid #fff',
    padding: '16px',
    borderRadius: '8px',
    margin: '12px auto',
    width: '280px',
    fontFamily: "'Press Start 2P', monospace",
    backgroundColor: themeColor || '#222',
    color: '#fff',
    textAlign: 'center',
    boxShadow: '0 0 12px #000',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    backgroundRepeat: 'no-repeat',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const powerClass = `card-power-${power?.toLowerCase().replace(/\s/g, '-')}`;

  return (
    <div style={cardStyle} className={`card-base ${powerClass}`}>
      <div style={overlayStyle} />
      <div style={contentStyle}>
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>{avatar}</div>
        <p><strong>Nome:</strong> {name}</p>
        <p><strong>Poder:</strong> {power}</p>
        <p><strong>Fraqueza:</strong> {weakness}</p>
        <p><strong>Classe:</strong> {selectedClass}</p>
        {lore && (
          <p style={{ marginTop: '12px', fontSize: '10px' }}>
            📜 <em>{lore}</em>
          </p>
        )}
      </div>
    </div>
  );
}

export default CharacterCard;
