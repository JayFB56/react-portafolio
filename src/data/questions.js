const questions = [
  {
    id: 1,
    question: "¿Quién desarrolló React?",
    image: "https://picsum.photos/seed/react/400/300",
    answers: [
      { text: "Google", isRight: false },
      { text: "Facebook", isRight: true },
      { text: "Microsoft", isRight: false },
      { text: "Amazon", isRight: false },
    ],
  },
  {
    id: 2,
    question: "¿Qué hook se usa para manejar el estado en React?",
    image: "https://picsum.photos/seed/hook/400/300",
    answers: [
      { text: "useEffect", isRight: false },
      { text: "useState", isRight: true },
      { text: "useRef", isRight: false },
      { text: "useContext", isRight: false },
    ],
  },
  {
    id: 3,
    question: "¿Cuál es el ciclo de vida equivalente en componentes funcionales?",
    image: "https://picsum.photos/seed/lifecycle/400/300",
    answers: [
      { text: "componentDidMount", isRight: false },
      { text: "useEffect", isRight: true },
      { text: "componentWillUnmount", isRight: false },
      { text: "getDerivedStateFromProps", isRight: false },
    ],
  },
  {
    id: 4,
    question: "¿Qué método se usa para recorrer arrays en React?",
    image: "https://picsum.photos/seed/map/400/300",
    answers: [
      { text: ".forEach()", isRight: false },
      { text: ".filter()", isRight: false },
      { text: ".map()", isRight: true },
      { text: ".reduce()", isRight: false },
    ],
  },
];

export default questions;
