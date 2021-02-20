import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  padding: 0.5rem 2.5rem;
  font-weight: 300;
  border-radius: 3px;
`;

export default function Button({ children, onClick }) {
  return (
    <ButtonStyles type="button" onClick={onClick}>
      {children}
    </ButtonStyles>
  );
}
