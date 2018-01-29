import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { easybibTheme } from './theme';

import EasybibHeader from './components/Header/Easybib';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={easybibTheme}>
          <EasybibHeader />
        </ThemeProvider>
        {/* <ThemeProvider theme={{ color: 'blue' }}>
          <Header>Bibme</Header>
        </ThemeProvider>
        <ThemeProvider theme={{ color: 'green' }}>
          <Header>Citation Machine</Header>
        </ThemeProvider> */}
      </div>
    );
  }
}

export default App;
