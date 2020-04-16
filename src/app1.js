// Main app component

import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global-style';
import themes from 'styles/themes';

// Main app container styles
const AppContainer = styled.div`
  display: block;
`;

export default function App() {
  const [state, setState] = useState({});
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <AppContainer></AppContainer>
    </ThemeProvider>
  );
}
