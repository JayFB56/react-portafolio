import React, { useState } from 'react';
import { Box, Title, Btn, Card } from '../styles/styled';
import usuarios from '../data/data.json';

function RecorrerArrays() {
  const [filtrar, setFiltrar] = useState(false);

  const usuariosMostrados = filtrar
    ? usuarios.filter((u) => u.edad < 30)
    : usuarios;

  return (
    <>
      <Title>Recorrer Arrays con .map() y .filter()</Title>
      <Box>
        <Btn onClick={() => setFiltrar(!filtrar)}>
          {filtrar ? 'Mostrar todos' : 'Filtrar menores de 30'}
        </Btn>
      </Box>
      <Box>
        {usuariosMostrados.map((usuario) => (
          <Card key={usuario.id} style={{ marginBottom: '10px' }}>
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>Edad:</strong> {usuario.edad} años</p>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default RecorrerArrays;
