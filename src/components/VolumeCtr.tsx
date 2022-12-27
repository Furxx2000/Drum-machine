import styled from 'styled-components';
import { useDrumState } from '../hooks/useDrumState';

export function VolumeCtr() {
  const { volume, handleSetVolume } = useDrumState();

  return (
    <StyledVolumeCtr>
      <input
        type='range'
        max='1'
        min='0'
        step='0.01'
        value={volume}
        onChange={(e) => handleSetVolume(e.target.value)}
      />
    </StyledVolumeCtr>
  );
}

const StyledVolumeCtr = styled.div`
  width: 100%;

  & > input[type='range'] {
    appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 8px;
    background-color: #1f3641;
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    width: 15px;
    height: 15px;
  }
`;
