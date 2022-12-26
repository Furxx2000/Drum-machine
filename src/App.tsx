import DrumMachine from './components/DrumMachine';
import { createGlobalStyle } from 'styled-components';

export default function App() {
  return (
    <>
      <DrumMachine />
      <GlobalStyle />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background-color: #1A2A33;
    overflow: hidden;
  }
`;
