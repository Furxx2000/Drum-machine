import styled from 'styled-components';

export default function DrumMachine() {
  const pads = [
    {
      id: 'Heater 1',
      text: 'Q',
    },
    {
      id: 'Heater 2',
      text: 'W',
    },
    {
      id: 'Heater 3',
      text: 'E',
    },
    {
      id: 'Heater 4',
      text: 'A',
    },
    {
      id: 'Clap',
      text: 'S',
    },
    {
      id: 'Open-HH',
      text: 'D',
    },
    {
      id: "Kick-n'-H",
      text: 'Z',
    },
    {
      id: 'Kick',
      text: 'X',
    },
    {
      id: 'Closed-HH',
      text: 'C',
    },
  ];

  return (
    <Wrapper id='drum-machine'>
      <DrumPanel>
        {pads.map((pad1) => (
          <Pad pad={pad1} />
        ))}
      </DrumPanel>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 1.5rem;
`;

const DrumPanel = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 96px);
  gap: 20px;
`;

const DrumPad = styled.button`
  width: 96px;
  height: 96px;
  border: none;
  border-radius: 10px;
  background-color: #1f3641;
  box-shadow: inset 0px -8px 0px #10212a;
`;

function Pad(pad: any) {
  return (
    <DrumPad className={`drum-pad ${pad.id}`}>
      <audio id={pad.text} src=''></audio>
      {pad.text}
    </DrumPad>
  );
}
