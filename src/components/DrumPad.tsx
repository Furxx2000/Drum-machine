import { StyledDrumPad } from './styles/DrumPad.styled';
import { useDrumState } from '../hooks/useDrumState';

interface Props {
  pad: {
    id: string;
    text: string;
    src: any;
  };
}

export function DrumPad({ pad: { id, text, src } }: Props) {
  const { volume, power, handleSetKey } = useDrumState();

  async function handleClickKey(targetButton: HTMLButtonElement) {
    const audio = document.getElementById(text) as HTMLAudioElement;
    const keyName = id.replaceAll('-', ' ');
    try {
      targetButton?.classList.add('is-active');
      setTimeout(() => {
        targetButton?.classList.remove('is-active');
      }, 50);
      if (!power) return;
      audio.volume = volume;
      audio.currentTime = 0;
      await audio?.play();
    } catch (err) {
      throw err;
    }
    handleSetKey(keyName);
  }

  return (
    <StyledDrumPad
      id={id}
      className='drum-pad'
      onClick={(e) => handleClickKey(e.currentTarget)}
    >
      <audio id={text} className='clip' src={src}></audio>
      {text}
    </StyledDrumPad>
  );
}
