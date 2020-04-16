// Main app component

import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

export default function App() {
  const [state, setState] = useState({});
  return <Container></Container>;
}

// Main app container styles
const Container = styled.div`
  display: block;
`;
