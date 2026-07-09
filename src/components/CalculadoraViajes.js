import React, { useState } from 'react';
import { Box, Title, Btn, Input } from '../styles/styled';

function CalculadoraViajes() {
  const [opcion, setOpcion] = useState(1);
  const [noches, setNoches] = useState(0);

  const calcularPrecio = () => {
    if (opcion === 1) {
      return noches * 40;
    }
    let precio = noches * 40;
    if (noches > 7) {
      precio -= 50;
    } else if (noches > 3) {
      precio -= 20;
    }
    return precio;
  };

  return (
    <>
      <Title>Calculadora de Viajes</Title>
      <Box>
        <h3>Selecciona una opción:</h3>
        <Btn
          onClick={() => setOpcion(1)}
          bg={opcion === 1 ? '#e94560' : '#0f3460'}
        >
          Hotel (40€/noche)
        </Btn>
        <Btn
          onClick={() => setOpcion(2)}
          bg={opcion === 2 ? '#e94560' : '#0f3460'}
        >
          Coche (40€/día)
        </Btn>
      </Box>
      <Box>
        <h3>{opcion === 1 ? 'Noches de hotel' : 'Días de coche'}</h3>
        <Input
          type="number"
          value={noches}
          onChange={(e) => setNoches(Number(e.target.value))}
          placeholder="Número"
        />
        {opcion === 2 && noches > 3 && (
          <p style={{ color: '#4ecca3' }}>
            Descuento aplicado: {noches > 7 ? '50€' : '20€'}
          </p>
        )}
        <h3>Total: {calcularPrecio()} €</h3>
      </Box>
    </>
  );
}

export default CalculadoraViajes;
