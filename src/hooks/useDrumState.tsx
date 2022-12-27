import { useState, useEffect, createContext, useContext } from 'react';
import { pads } from '../helpers/helper';

function useDrumStateSource() {
  const [key, setKey] = useState('');
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);

  async function playAudio(key: string) {
    const audio = document.getElementById(key) as HTMLAudioElement;
    const button = audio?.parentElement as HTMLButtonElement;
    try {
      button?.classList.add('is-active');
      setTimeout(() => {
        button?.classList.remove('is-active');
      }, 50);
      if (!power) return;
      audio.volume = volume;
      audio.currentTime = 0;
      await audio?.play();
    } catch (error) {
      throw error;
    }
  }

  function keydownHandler(e: KeyboardEvent) {
    const matchedKey = 'QWEASDZXC';
    const key = e.code.slice(-1);

    if (matchedKey.includes(key)) {
      e.preventDefault();

      const keyName = pads.find((pad) => pad.text === key)?.id!;
      const name = keyName.replaceAll('-', ' ');
      setKey(name);

      playAudio(key);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);

    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [power, volume]);

  function handleSetKey(key: string) {
    setKey(key);
  }

  function handleSetPower() {
    setPower(!power);
    setKey('');
  }

  function handleSetVolume(volume: string) {
    setVolume(+volume);
  }

  return {
    key,
    power,
    volume,
    handleSetKey,
    handleSetPower,
    handleSetVolume,
  };
}

const DrumStateContext = createContext<ReturnType<typeof useDrumStateSource>>(
  null as unknown as ReturnType<typeof useDrumStateSource>
);

export function useDrumState() {
  return useContext(DrumStateContext);
}

export function DrumStateProvider({ children }: { children: React.ReactNode }) {
  return (
    <DrumStateContext.Provider value={useDrumStateSource()}>
      {children}
    </DrumStateContext.Provider>
  );
}
