import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  text-align: center;
  padding: 1rem;
  color: ${({ theme }) => theme.color.text};
`;

export default function Footer() {
  return (
    <FooterStyles>
      Kieran Venison. {new Date().getFullYear()}, Built with love
    </FooterStyles>
  );
}
