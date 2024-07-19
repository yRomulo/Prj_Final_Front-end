import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  > button {
    padding-top: 24px;
    justify-content: flex-start;
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: white;
    font-family: "Poppins", serif;
    font-size: 16px;
    outline: none;
    font-weight: bold;
  }
  > div {
    align-items: center;
    display: flex;
    margin-top: 42px;
    gap: 50px;
    >img{
      border-radius: 50%;
      height: 390px;
      width: 390px;
    }
    > div {
      > .product-actions {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-top: 10px;
        > input {
          width: 50px;
          padding: 5px;
          border-radius: 5px;
          border: none;
        }
        > button {
          background-color: #d32f2f;
          border: none;
          padding: 10px;
          border-radius: 5px;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
`;
