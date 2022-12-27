import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 3rem;

  & > * {
    flex: 1;
  }
`;
