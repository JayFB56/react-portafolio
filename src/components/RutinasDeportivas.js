import React, { useState, useEffect } from 'react';
import { Box, Title, Btn, Row, Card } from '../styles/styled';
import routines from '../data/routines';

function RutinasDeportivas() {
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const [currentEx, setCurrentEx] = useState(null);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  const workout = routines[currentWorkout];

  useEffect(() => {
    if (!timerActive) return;
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive]);

  useEffect(() => {
    if (timerActive && timer <= 0) {
      setCurrentEx((prev) => {
        if (prev === null || prev >= workout.exercises.length - 1) return 0;
        return prev + 1;
      });
      setTimer(30);
    }
  }, [timer, timerActive, workout.exercises.length]);

  return (
    <>
      <Title>Rutinas Deportivas</Title>
      <Box>
        <h2 style={{ color: '#4ecca3' }}>{workout.title}</h2>
      </Box>
      <Box>
        <Btn
          onClick={() =>
            setCurrentWorkout((p) =>
              p === 0 ? routines.length - 1 : p - 1
            )
          }
        >
          Anterior
        </Btn>
        <span style={{ margin: '0 20px', fontWeight: 'bold' }}>
          Rutina {currentWorkout + 1} de {routines.length}
        </span>
        <Btn
          onClick={() =>
            setCurrentWorkout((p) =>
              p === routines.length - 1 ? 0 : p + 1
            )
          }
        >
          Siguiente
        </Btn>
      </Box>
      <Box>
        <h3>Ejercicios</h3>
        <Row columns="repeat(2, 1fr)" gap="15px">
          {workout.exercises.map((ex, index) => (
            <Card
              key={index}
              active={currentEx === index}
              clickable
              onClick={() => {
                setCurrentEx(index);
                setTimer(30);
              }}
            >
              <img
                src={ex.image}
                alt={ex.name}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
              <p style={{ textAlign: 'center', marginTop: '10px' }}>
                {ex.name}
              </p>
            </Card>
          ))}
        </Row>
      </Box>
      <Box>
        <Btn onClick={() => setTimerActive(!timerActive)}>
          {timerActive ? 'Detener Cronómetro' : 'Iniciar Cronómetro (30s)'}
        </Btn>
        {timerActive && <span style={{ marginLeft: '15px' }}>Tiempo: {timer}s</span>}
      </Box>
    </>
  );
}

export default RutinasDeportivas;
