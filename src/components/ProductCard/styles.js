import styled from "styled-components";

export const Container = styled.div`
  width: 304px;
  height: 462px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  border-radius: 5px;
  .product-card {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  > img {
    width: 176px;
    border-radius: 50%;
  }

  > h3 {
    margin: 10px 0;
  }

  > p {
    margin: 5px 0;
  }

  > .product-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  > .product-actions {
    > input {
      width: 50px;
      padding: 5px;
      border-radius: 5px;
      border: none;
    }
  }

  > .product-actions button {
    background-color: #d32f2f;
    border: none;
    padding: 10px;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
  }
`;
