import React from 'react';
import './assets/css/fonts.css';
import { Switch, Route } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import {
  CssBaseline,
  Container,
  Box,
} from '@material-ui/core';

import { theme } from './utils/theme';

import { STYLES } from './utils/constants';

import { Home } from './Home';
import { Footer } from './Base/Footer';
import { Profile } from './Profile';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Box style={STYLES.FOOTER.BACKGROUND} mt={8} p={4}>
          <Container maxWidth="lg">
            <Footer />
          </Container>
        </Box>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
