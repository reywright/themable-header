import * as React from 'react';
import Header from './Header';
import { ThemeProvider } from 'styled-components';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={{ color: 'pink' }}>
          <Header>EasyBib Redesign</Header>
        </ThemeProvider>
        <ThemeProvider theme={{ color: 'blue' }}>
          <Header>Bibme</Header>
        </ThemeProvider>
        <ThemeProvider theme={{ color: 'green' }}>
          <Header>Citation Machine</Header>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
