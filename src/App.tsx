import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { easybibTheme, bibmeTheme, globalCss } from './theme';

import EasybibHeader from './components/Header/Easybib';
import BibMeHeader from './components/Header/Bibme';

globalCss();
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={easybibTheme}>
          <EasybibHeader />
        </ThemeProvider>
        <br />
        <br />
        <ThemeProvider theme={bibmeTheme}>
          <BibMeHeader />
        </ThemeProvider>
        <br />
        <br />
        {/* <ThemeProvider theme={{ color: 'green' }}>
          <Header>Citation Machine</Header>
        </ThemeProvider> */}
      </div>
    );
  }
}

export default App;
