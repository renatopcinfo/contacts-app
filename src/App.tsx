import React from 'react';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <div className="App"></div>
      <Styles />
    </>
  );
}

const Styles = createGlobalStyle`
  html {
    font-size: 16px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
  }
`;

export default App;
