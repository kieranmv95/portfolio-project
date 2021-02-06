import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.text};
`;

export default function HomePage() {
  return <StyledTitle>Hello, world</StyledTitle>;
}
