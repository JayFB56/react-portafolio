import React, { useState } from 'react';
import { Box, Title } from '../styles/styled';
import styled from 'styled-components';
import escenas from '../data/cuento.json';

const SceneContainer = styled.div`
  position: relative;
  display: inline-block;
  max-width: 100%;
`;

const SceneImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  display: block;
`;

const DoorArea = styled.div`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  cursor: pointer;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(233, 69, 96, 0.25);
    border-color: #e94560;
  }
`;

function CuentoInteractivo() {
  const [currentSceneId, setCurrentSceneId] = useState(escenas[0]?.id || 1);

  const currentScene = escenas.find((s) => s.id === currentSceneId);

  if (!currentScene) {
    return (
      <Box>
        <Title>Cuento Interactivo</Title>
        <p>Escena no encontrada.</p>
      </Box>
    );
  }

  return (
    <>
      <Title>Cuento Interactivo</Title>
      <Box>
        <p style={{ fontStyle: 'italic', marginBottom: '15px', lineHeight: '1.6' }}>
          {currentScene.texto}
        </p>
        <SceneContainer>
          <SceneImage src={currentScene.imagen} alt="Escena del cuento" />
          {currentScene.doors?.map((door, index) => (
            <DoorArea
              key={index}
              x={door.x}
              y={door.y}
              width={door.width}
              height={door.height}
              onClick={() => setCurrentSceneId(door.destino)}
              title={door.texto || `Ir a escena ${door.destino}`}
            />
          ))}
        </SceneContainer>
        <div style={{ marginTop: '15px', fontSize: '14px', color: '#888' }}>
          Pasa el ratón sobre la imagen para ver las zonas interactivas.
        </div>
      </Box>
    </>
  );
}

export default CuentoInteractivo;
