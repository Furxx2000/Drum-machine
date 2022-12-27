import DrumMachine from './components/DrumMachine';
import { GlobalStyle } from './components/styles/GlobalStyle.styled';
import { DrumStateProvider } from './hooks/useDrumState';

export default function App() {
  return (
    <DrumStateProvider>
      <DrumMachine />
      <GlobalStyle />
    </DrumStateProvider>
  );
}
