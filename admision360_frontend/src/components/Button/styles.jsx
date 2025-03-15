import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--primary);
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  border: 0;
  color: var(--secondary);
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.2s;
  width: ${({ w = "100%" }) => w};
  cursor: pointer;
  :disabled {
    opacity: 0.5;
  }
`;
