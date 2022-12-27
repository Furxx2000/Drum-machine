import styled from 'styled-components';
import { useDrumState } from '../hooks/useDrumState';

export function PowerCtr() {
  const { power, handleSetPower } = useDrumState();

  return (
    <StyledPowerCtr onClick={handleSetPower}>
      Power {power ? 'On' : 'Off'}
    </StyledPowerCtr>
  );
}

const StyledPowerCtr = styled.div`
  min-width: 100px;
  min-height: 45px;
  color: #1a2a33;
  padding: 10px 1rem;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  background-color: #31c3bd;
  box-shadow: 0px 4px 0px #118c87;

  &:active {
    translate: 0 4px;
    box-shadow: none;
  }
`;
