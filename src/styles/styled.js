import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #1a1a2e;
    color: #eee;
  }
  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || '1fr'};
  gap: ${(props) => props.gap || '20px'};
`;

export const Box = styled.div`
  background: ${(props) => props.bg || '#16213e'};
  padding: ${(props) => props.padding || '20px'};
  border-radius: 8px;
  border: 1px solid #0f3460;
  margin-bottom: 20px;
`;

export const Btn = styled.button`
  background: ${(props) => props.bg || '#e94560'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.hoverBg || '#c73652'};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Title = styled.h2`
  color: #e94560;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #0f3460;
  background: #1a1a2e;
  color: #eee;
  font-size: 16px;
  margin: 5px 0;
  width: 100%;
  max-width: 300px;
`;

export const Card = styled.div`
  background: #16213e;
  border-radius: 8px;
  padding: 20px;
  border: ${(props) => (props.active ? '2px solid #e94560' : '1px solid #0f3460')};
  transition: all 0.3s ease;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
`;
