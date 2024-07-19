import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 260px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  margin-top: 164px;
  display: flex;
  align-items: center;
  gap: 50px;
  img {
    width: 50%;
    height: 100%;
  }
  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    > h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-style: normal;
    }

    > p {
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-style: normal;
    }
  }
`;
