import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.text};
`;

export default function HomePage() {
  return (
    <Layout>
      <div>
        <StyledTitle>Hello, world</StyledTitle>
      </div>
    </Layout>
  );
}
