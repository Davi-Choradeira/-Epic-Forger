import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import StatusBar from './StatusBar';
import './index.css';
import backgroundImage from './assets/images/montanhas-epicas.png';
import heroBanner from './assets/images/Persona.png'; // Banner dos 4 personagens

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [character, setCharacter] = useState(null);
  const [history, setHistory] = useState([]);

  const classOptions = {
    Mago: { icon: '🧙', powers: ['Luz', 'Sombras', 'Tempo', 'Fogo', 'Espírito'] },
    Guerreiro: { icon: '⚔️', powers: ['Metal', 'Relâmpago', 'Fogo', 'Força', 'Explosão'] },
    Arqueiro: { icon: '🏹', powers: ['Vento', 'Gelo', 'Cristais', 'Água', 'Precisão'] },
    Guardião: { icon: '🛡️', powers: ['Energia', 'Pedra', 'Escudo', 'Raiz', 'Reflexo'] },
  };

  const weaknesses = ['Silêncio', 'Tempo', 'Caos', 'Dúvida', 'Chamas', 'Sombra'];
  const colors = ['#d6336c', '#3f88c5', '#7c4dff', '#ff6f00', '#43a047', '#6d4c41'];
  const regions = [
    'vulcão eterno',
    'floresta das brumas',
    'abismo cristalino',
    'templo do eco',
    'montanha espectral',
    'mar dos sonhos perdidos',
  ];
  const titles = [
    'guardião ancestral',
    'filho das tempestades',
    'mestra dos portais',
    'viajante planar',
    'caçador de relâmpagos',
    'discípulo do tempo',
  ];

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
      {/* Fundo visual com montanhas épicas */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          opacity: 0.12,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Efeito por classe */}
      <div className={`background-effect ${selectedClass?.toLowerCase()}`} />

      {loggedIn && (
        <StatusBar
          username={username}
          selectedClass={selectedClass}
          forgeCount={history.length + (character ? 1 : 0)}
        />
      )}

      <div
        style={{
          textAlign: 'center',
          paddingTop: loggedIn ? '60px' : '40px',
          fontFamily: "'Press Start 2P', monospace",
          color: '#fff',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {!loggedIn ? (
          <div className="login-container">
            <h1 className="title-entry">🧙‍♂️ Epic Forger</h1>
            <p>Digite seu nome místico</p>
            <input
              type="text"
              placeholder="Seu nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-pixel"
            />
            <p>Escolha sua classe:</p>
            <div className="class-selection">
              {Object.keys(classOptions).map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`class-btn ${selectedClass === cls ? 'selected' : ''}`}
                >
                  {classOptions[cls].icon} {cls}
                </button>
              ))}
            </div>
            <button onClick={handleLogin} className="enter-btn">
              Entrar na Forja
            </button>

            {/* Banner com os quatro heróis */}
            <div className="gallery-epic">
              <img src={heroBanner} alt="Heróis Épicos" className="persona-banner" />
            </div>
            <p style={{ fontSize: '12px', color: '#ccc', marginTop: '8px' }}>
              Quatro forças… um só destino. Escolha a sua.
            </p>
          </div>
        ) : (
          <>
            <h1 style={{ fontSize: '28px' }}>⚔️ Epic Forger</h1>
            <p>
              Bem-vindo, <strong>{username}</strong>! Classe escolhida:{' '}
              <strong>{selectedClass}</strong>
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
                <h2 style={{ fontSize: '16px', marginTop: '24px' }}>🧙‍♂️ Personagem Atual</h2>
                <div className="card-grid">
                  <CharacterCard {...character} />
                </div>

                <h2 style={{ fontSize: '14px', marginTop: '32px' }}>📜 Histórico de Criações</h2>
                <div className="card-grid">
                  {history.map((c, index) => (
                    <CharacterCard key={index} {...c} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;