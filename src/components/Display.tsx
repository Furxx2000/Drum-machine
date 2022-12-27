import styled from 'styled-components';
import { useDrumState } from '../hooks/useDrumState';

export function Display() {
  const { key, power } = useDrumState();
  return <StyledDisplay id='display'>{power ? key : ''}</StyledDisplay>;
}

const StyledDisplay = styled.p`
  min-width: 140px;
  min-height: 45px;
  padding: 10px 1rem;
  color: #1a2a33;
  border-radius: 10px;
  box-shadow: 0px 4px 0px #cc8b13;
  background-color: #f2b137;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: center;
`;
