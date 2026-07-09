import React, { useState } from 'react';
import { GlobalStyle, Container, Box, Btn, Row } from './styles/styled';
import EjerciciosBasicos from './components/EjerciciosBasicos';
import CalculadoraViajes from './components/CalculadoraViajes';
import RecorrerArrays from './components/RecorrerArrays';
import RutinasDeportivas from './components/RutinasDeportivas';
import Trivial from './components/Trivial';
import CuentoInteractivo from './components/CuentoInteractivo';

const menuItems = [
  { id: 'basicos', label: 'Ejercicios Básicos' },
  { id: 'viajes', label: 'Calculadora Viajes' },
  { id: 'arrays', label: 'Recorrer Arrays' },
  { id: 'rutinas', label: 'Rutinas Deportivas' },
  { id: 'trivial', label: 'Juego Trivial' },
  { id: 'cuento', label: 'Cuento Interactivo' },
];

function App() {
  const [activeExercise, setActiveExercise] = useState(null);

  const renderExercise = () => {
    switch (activeExercise) {
      case 'basicos':
        return <EjerciciosBasicos />;
      case 'viajes':
        return <CalculadoraViajes />;
      case 'arrays':
        return <RecorrerArrays />;
      case 'rutinas':
        return <RutinasDeportivas />;
      case 'trivial':
        return <Trivial />;
      case 'cuento':
        return <CuentoInteractivo />;
      default:
        return (
          <Box>
            <h2 style={{ color: '#e94560' }}>
              Bienvenido al Portafolio de React
            </h2>
            <p>Selecciona un ejercicio del menú para comenzar.</p>
          </Box>
        );
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Box as="nav" padding="15px">
          <Row columns="repeat(6, 1fr)" gap="10px">
            {menuItems.map((item) => (
              <Btn
                key={item.id}
                bg={activeExercise === item.id ? '#e94560' : '#0f3460'}
                onClick={() => setActiveExercise(item.id)}
              >
                {item.label}
              </Btn>
            ))}
          </Row>
        </Box>
        {renderExercise()}
      </Container>
    </>
  );
}

export default App;
