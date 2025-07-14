import React from 'react';

function Mission({ character }) {
  if (!character) return null;

  const locais = [
    'Templo do Eco',
    'Abismo Cristalino',
    'Floresta das Brumas',
    'Montanha Espectral',
    'Ruínas do Tempo',
  ];

  const desafios = ['Chamas', 'Sombra', 'Caos', 'Tempo', 'Dúvida'];

  // Sorteio dos dados da missão
  const local = locais[Math.floor(Math.random() * locais.length)];
  const desafio = desafios[Math.floor(Math.random() * desafios.length)];

  const venceu =
    character.power !== desafio && character.weakness !== desafio;

  return (
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        border: '2px solid #fff',
        borderRadius: '8px',
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: '#fff',
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '10px',
        textAlign: 'center',
        boxShadow: '0 0 12px #000',
      }}
    >
      <h2 style={{ fontSize: '14px', marginBottom: '12px' }}>🗺️ Missão Gerada</h2>
      <p><strong>Local:</strong> {local}</p>
      <p><strong>Desafio:</strong> {desafio}</p>
      <p style={{ marginTop: '12px' }}>
        {venceu ? '🎖️ Vitória! Missão concluída com honra.' : '❌ Derrota... Seu poder não foi suficiente.'}
      </p>
    </div>
  );
}

export default Mission;