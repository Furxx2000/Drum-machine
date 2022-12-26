import { Container } from './styles/Container.styled';
import { DrumPanel } from './styles/DrumPanel.styled';
import { DrumPad } from './DrumPad';
import { pads } from '../helpers/helper';

export default function DrumMachine() {
  return (
    <Container id='drum-machine'>
      <DrumPanel>
        {pads.map((pad) => (
          <DrumPad key={pad.text} id={pad.id} text={pad.text} src={pad?.src} />
        ))}
      </DrumPanel>
    </Container>
  );
}
