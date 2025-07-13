import React from 'react';
import './index.css';

function StatusBar({ username, selectedClass, forgeCount }) {
  const classIcons = {
    Mago: '🧙',
    Guerreiro: '⚔️',
    Arqueiro: '🏹',
    Guardião: '🛡️',
  };

  return (
    <div className="status-bar">
      <span>Jogador: <strong>{username}</strong></span>
      <span>Classe: {classIcons[selectedClass]} <strong>{selectedClass}</strong></span>
      <span>Forjas: <strong>{forgeCount}</strong></span>
    </div>
  );
}

export default StatusBar;