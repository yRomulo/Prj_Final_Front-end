import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.RED_D};
  padding: 10px 20px;
  border-radius: 5px;
  color: #ffffff;

  font-size: 16px;
  display: inline-block;
  text-align: center;
  margin: 5px;
  height: 50%;
`;
