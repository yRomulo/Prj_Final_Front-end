import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 27.5px 124px 27.5px 124px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  > h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
  }
`;
