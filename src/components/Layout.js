import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const mainTheme = {
  color: {
    background: 'white',
    text: 'black',
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.color.background};
  }
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Normalize />
      <main>{children}</main>
    </ThemeProvider>
  );
}
