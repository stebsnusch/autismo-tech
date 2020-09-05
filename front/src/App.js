import React, { Fragment } from 'react';
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
import { LearningCenter } from './LearningCenter';
import { CompanyPage } from './CompanyPage';
import { Premium } from './Premium';
import { RatingPage } from './RatingPage';

function App() {
  const userType = 'company';
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" render={() => <Home userType={userType} />} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/company/:companyId" component={CompanyPage} />
          <Route exact path="/learning-center" component={LearningCenter} />
          <Route exact path="/premium" component={Premium} />
          <Route exact path="/rate-company" component={RatingPage} />
        </Switch>
        <Box style={STYLES.FOOTER.BACKGROUND} mt={8} p={4}>
          <Container maxWidth="lg">
            <Footer userType={userType} />
          </Container>
        </Box>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
