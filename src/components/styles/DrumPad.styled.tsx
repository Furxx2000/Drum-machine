import styled from 'styled-components';

export const StyledDrumPad = styled.button`
  appearance: none;
  padding: 1.5rem;
  color: #a8bfc9;
  font-size: 32px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  background-color: #1f3641;
  box-shadow: 0px 8px 0px #10212a;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.05s ease;
  cursor: pointer;

  &.is-active {
    translate: 0 4px;
    box-shadow: none;
  }

  &:hover {
    scale: 0.98;
  }
`;
