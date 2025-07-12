import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import './index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [character, setCharacter] = useState(null);
  const [history, setHistory] = useState([]);

  const classOptions = {
    'Mago': {
      icon: '🧙',
      powers: ['Luz', 'Sombras', 'Tempo', 'Fogo', 'Espírito'],
    },
    'Guerreiro': {
      icon: '⚔️',
      powers: ['Metal', 'Relâmpago', 'Fogo', 'Força', 'Explosão'],
    },
    'Arqueiro': {
      icon: '🏹',
      powers: ['Vento', 'Gelo', 'Cristais', 'Água', 'Precisão'],
    },
    'Guardião': {
      icon: '🛡️',
      powers: ['Energia', 'Pedra', 'Escudo', 'Raiz', 'Reflexo'],
    },
  };

  const weaknesses = ['Silêncio', 'Tempo', 'Caos', 'Dúvida', 'Chamas', 'Sombra'];
  const colors = ['#d6336c', '#3f88c5', '#7c4dff', '#ff6f00', '#43a047', '#6d4c41'];
  const regions = ['vulcão eterno', 'floresta das brumas', 'abismo cristalino', 'templo do eco', 'montanha espectral', 'mar dos sonhos perdidos'];
  const titles = ['guardião ancestral', 'filho das tempestades', 'mestra dos portais', 'viajante planar', 'caçador de relâmpagos', 'discípulo do tempo'];

  function handleLogin() {
    if (username.trim() && selectedClass) {
      setLoggedIn(true);
    }
  }

  function forgeCharacter() {
    const classInfo = classOptions[selectedClass];
    const name = username + ' - ' + titles[Math.floor(Math.random() * titles.length)];
    const power = classInfo.powers[Math.floor(Math.random() * classInfo.powers.length)];
    const weakness = weaknesses[Math.floor(Math.random() * weaknesses.length)];
    const themeColor = colors[Math.floor(Math.random() * colors.length)];
    const origin = regions[Math.floor(Math.random() * regions.length)];
    const avatar = classInfo.icon;
    const lore = `${name} emergiu de ${origin}, dominando o poder de ${power}. Mas teme a força sombria de ${weakness}.`;

    const newCharacter = { name, power, weakness, themeColor, lore, avatar, selectedClass };
    setCharacter(newCharacter);
    setHistory((prev) => [newCharacter, ...prev.slice(0, 4)]);
  }

  return (
    <>
      <div className={`background-effect ${selectedClass?.toLowerCase()}`} />
      <div
        style={{
          textAlign: 'center',
          paddingTop: '40px',
          fontFamily: "'Press Start 2P', monospace",
          color: '#fff',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {!loggedIn ? (
          <div>
            <h1 style={{ fontSize: '22px' }}>🧙‍♂️ Bem-vindo à Epic Forger</h1>
            <p>Digite seu nome místico</p>
            <input
              type="text"
              placeholder="Seu nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: '10px',
                fontFamily: "'Press Start 2P', monospace",
                width: '220px',
                border: '2px solid #fff',
                backgroundColor: '#1e1e2f',
                color: '#f4f4f4',
                marginBottom: '12px',
              }}
            />
            <p>Escolha sua classe:</p>
            {Object.keys(classOptions).map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                style={{
                  padding: '10px 14px',
                  margin: '6px',
                  backgroundColor: selectedClass === cls ? '#ff3366' : '#333',
                  color: '#fff',
                  border: '2px solid #fff',
                  borderRadius: '6px',
                  fontFamily: "'Press Start 2P', monospace",
                  cursor: 'pointer',
                }}
              >
                {classOptions[cls].icon} {cls}
              </button>
            ))}
            <br />
            <button
              onClick={handleLogin}
              style={{
                padding: '12px 24px',
                fontSize: '12px',
                backgroundColor: '#0f0',
                color: '#000',
                border: '2px solid #fff',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '12px',
              }}
            >
              Entrar na Forja
            </button>
          </div>
        ) : (
          <>
            <h1 style={{ fontSize: '28px' }}>⚔️ Epic Forger</h1>
            <p>
              Bem-vindo, <strong>{username}</strong>! Classe escolhida: <strong>{selectedClass}</strong>
            </p>
            <button
              onClick={forgeCharacter}
              style={{
                padding: '12px 24px',
                fontSize: '12px',
                backgroundColor: '#ff3366',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '4px',
                cursor: 'pointer',
                marginBottom: '20px',
              }}
            >
              Forjar Personagem
            </button>

            {character && (
              <>
                <CharacterCard {...character} />
                <h2 style={{ marginTop: '30px', fontSize: '14px' }}>📜 Histórico de Criações</h2>
                {history.map((c, index) => (
                  <CharacterCard key={index} {...c} />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;