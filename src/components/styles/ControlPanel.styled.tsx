import styled from 'styled-components';

export const StyledControlPanel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    color: #a8bfc9;
    font-size: 60px;

    & > span {
      font-weight: 500;
      font-size: 40px;
    }
  }
`;
