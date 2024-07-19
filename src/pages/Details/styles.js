import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto 77px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    padding: 0 124px;
    grid-area: content;
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }
`;
