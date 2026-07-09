import React, { useState, useEffect } from 'react';
import { Box, Title, Btn, Card } from '../styles/styled';
import styled from 'styled-components';
import questions from '../data/questions';
import { shuffleArray } from '../Utils';

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled(Box)`
  text-align: center;
  max-width: 500px;
  width: 90%;
`;

function Trivial() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const initGame = () => {
    const sq = shuffleArray(questions);
    setShuffledQuestions(sq);
    if (sq.length > 0) {
      setShuffledAnswers(shuffleArray(sq[0].answers));
    }
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setFeedback(null);
    setShowPopup(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleAnswer = (answer, index) => {
    if (feedback) return;
    setSelectedAnswer(index);

    if (answer.isRight) {
      setFeedback('correcto');
      setTimeout(() => {
        if (currentIndex === shuffledQuestions.length - 1) {
          setShowPopup(true);
          setFeedback(null);
          setSelectedAnswer(null);
        } else {
          const nextIdx = currentIndex + 1;
          setCurrentIndex(nextIdx);
          setShuffledAnswers(shuffleArray(shuffledQuestions[nextIdx].answers));
          setFeedback(null);
          setSelectedAnswer(null);
        }
      }, 800);
    } else {
      setFeedback('incorrecto');
      setTimeout(() => {
        const prevIdx = Math.max(0, currentIndex - 1);
        setCurrentIndex(prevIdx);
        setShuffledAnswers(shuffleArray(shuffledQuestions[prevIdx].answers));
        setFeedback(null);
        setSelectedAnswer(null);
      }, 1000);
    }
  };

  if (shuffledQuestions.length === 0) return null;

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <>
      <Title>Juego Trivial</Title>
      <Box>
        <p>
          Pregunta {currentIndex + 1} de {shuffledQuestions.length}
        </p>
        <h3>{currentQuestion.question}</h3>
        {currentQuestion.image && (
          <img
            src={currentQuestion.image}
            alt="Relacionada"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '8px',
              margin: '10px 0',
            }}
          />
        )}
      </Box>
      <Box>
        {shuffledAnswers.map((answer, index) => (
          <Card
            key={index}
            clickable
            onClick={() => handleAnswer(answer, index)}
            style={{
              marginBottom: '10px',
              backgroundColor:
                selectedAnswer === index && feedback === 'correcto'
                  ? '#4ecca3'
                  : selectedAnswer === index && feedback === 'incorrecto'
                  ? '#e94560'
                  : '',
            }}
          >
            {answer.text}
          </Card>
        ))}
      </Box>
      {showPopup && (
        <Popup>
          <PopupContent>
            <Title>¡Felicidades!</Title>
            <p>Has respondido correctamente todas las preguntas.</p>
            <Btn onClick={initGame}>Volver a empezar</Btn>
          </PopupContent>
        </Popup>
      )}
    </>
  );
}

export default Trivial;
