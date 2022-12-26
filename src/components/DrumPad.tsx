import { StyledDrumPad } from './styles/StyledDrumPad.styled';

interface Props {
  id: string;
  text: string;
  src: any;
}

export function DrumPad({ id, text, src }: Props) {
  async function handleClick() {
    const audio = document.getElementById(text) as HTMLAudioElement;
    try {
      audio.currentTime = 0;
      await audio?.play();
    } catch (err) {
      throw err;
    }
  }

  return (
    <StyledDrumPad className={`drum-pad ${id}`} onClick={handleClick}>
      <audio id={text} src={src}></audio>
      {text}
    </StyledDrumPad>
  );
}
