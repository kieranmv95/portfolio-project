import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const mainTheme = {
  color: {
    background: 'white',
    text: 'black',
    social_icons: '#B9B9B9',
    primary: '#1758E8',
    text_offset: '#9B9B9B',
  },
  fonts: {
    header: 'Montserrat',
    copy: 'Source Sans Pro',
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.fonts.copy}, sans-serif;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.header}, sans-serif;
  }

  h2 {
    font-size: 1.75rem;
  }

  .container {
    padding: 0 1rem;
    @media (min-width: 768px) {
      width: 80%;
      margin: 0 auto;
    }
    @media (min-width: 992px) {
      width: 960px;
      margin: 0 auto;
    }
  }

  .hero__title {
    margin: 0.5rem 0;
  }
  .hero__subtitle {
    margin: 0;
    font-weight: 300;
    color: ${({ theme }) => theme.color.text_offset};
  }

  .text-center {
    text-align: center;
  }
`;

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Normalize />
      {children}
    </ThemeProvider>
  );
}
