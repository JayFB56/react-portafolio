import React, { useState } from 'react';
import { Box, Title, Input, Row } from '../styles/styled';

const Post = ({ postTitle, author, children }) => (
  <Box>
    <h3 style={{ margin: '0 0 5px 0', color: '#e94560' }}>{postTitle}</h3>
    <small style={{ color: '#888' }}>Por: {author}</small>
    <div style={{ marginTop: '10px' }}>{children}</div>
  </Box>
);

function EjerciciosBasicos() {
  const [euros, setEuros] = useState(0);
  const [celsius, setCelsius] = useState(0);
  const [ancho, setAncho] = useState(0);
  const [alto, setAlto] = useState(0);

  return (
    <>
      <Title>Ejercicios Básicos</Title>
      <Row columns="repeat(2, 1fr)" gap="20px">
        <Box>
          <h3>Euros a Dólares</h3>
          <Input
            type="number"
            value={euros}
            onChange={(e) => setEuros(Number(e.target.value))}
            placeholder="Cantidad en euros"
          />
          <p>{euros} € = {(euros * 2).toFixed(2)} $</p>
        </Box>
        <Box>
          <h3>Centígrados a Fahrenheit</h3>
          <Input
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(Number(e.target.value))}
            placeholder="Grados Celsius"
          />
          <p>
            {celsius} °C = {((celsius * 9) / 5 + 32).toFixed(2)} °F
          </p>
        </Box>
        <Box>
          <h3>Superficie de un Rectángulo</h3>
          <Input
            type="number"
            value={ancho}
            onChange={(e) => setAncho(Number(e.target.value))}
            placeholder="Ancho"
          />
          <Input
            type="number"
            value={alto}
            onChange={(e) => setAlto(Number(e.target.value))}
            placeholder="Alto"
          />
          <p>Área: {ancho * alto} m²</p>
        </Box>
        <Box>
          <h3>Componente Post</h3>
          <Post postTitle="Aprendiendo React" author="Ana García">
            <p>
              Este es el contenido del post pasado como children. React es una
              biblioteca para construir interfaces de usuario.
            </p>
          </Post>
          <Post postTitle="Styled Components" author="Carlos López">
            <p>
              Styled-components permite escribir CSS real dentro de JavaScript,
              facilitando el desarrollo de componentes estilizados.
            </p>
          </Post>
        </Box>
      </Row>
    </>
  );
}

export default EjerciciosBasicos;
