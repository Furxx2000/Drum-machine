import { Container } from './styles/Container.styled';
import { DrumPanel } from './styles/DrumPanel.styled';
import { DrumPad } from './DrumPad';
import { ControlPanel } from './ControlPanel';
import { pads } from '../helpers/helper';

export default function DrumMachine() {
  return (
    <Container id='drum-machine'>
      <ControlPanel />
      <DrumPanel>
        {pads.map((pad) => (
          <DrumPad key={pad.text} pad={pad} />
        ))}
      </DrumPanel>
    </Container>
  );
}
