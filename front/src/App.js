import React from 'react';
import './assets/css/fonts.css';

import {
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';

import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';

import { STYLES } from './utils/constants';

import { Header } from './Home/components/Header';
import { Menu } from './Home/components/Menu';
import { Companies } from './Home/components/Companies';
import { Footer } from './Base/Footer';

function App() {
  const theme = createMuiTheme({
    typography: {
      htmlFontSize: 1,
      fontSize: 1,
      fontFamily: 'Quattrocento Sans, sans-serif',
      h1: {
        fontSize: '4rem',
      },
      h2: {
        fontSize: '2.75rem',
      },
      h3: {
        fontSize: '2rem',
      },
      h4: {
        fontSize: '1.125rem',
      }
    },
    palette: {
      primary: {
        main: '#092868',
      },
      secondary: {
        main: '#b70012',
      },
      warning: {
        main: '#ffec00',
      }
    }
  });
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Box style={STYLES.HEADER_BACKGROUND} mb={4}>
          <Container maxWidth="lg">
            <Header />
          </Container>
        </Box>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid xs={6} item>
              <Box mb={4}>
                <Typography variant="h2" component="h2">
                  Menu principal
              </Typography>
              </Box>
              <Menu />
            </Grid>
            <Grid xs={6} item>
              <Box mb={4}>
                <Typography variant="h2" component="h2">
                  Melhores empresas
              </Typography>
              </Box>
              <Companies />
            </Grid>
          </Grid>
        </Container>
        <Box style={STYLES.FOOTER.BACKGROUND} mt={4}>
          <Container maxWidth="lg">
            <Footer />
          </Container>
        </Box>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
