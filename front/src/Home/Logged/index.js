import React, { Fragment } from 'react';

import { STYLES } from '../../utils/constants';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Companies } from './components/Companies';

import {
  Container,
  Box,
  Typography,
  Grid,
} from '@material-ui/core';

export const Logged = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}