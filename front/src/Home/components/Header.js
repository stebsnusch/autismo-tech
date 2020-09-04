import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Grid,
  Link,
  Button
} from '@material-ui/core';
import { STYLES } from '../../utils/constants';

export const Header = () => (
  <Box py={8}>
    <Grid direction="row" justify="flex-start" spacing={8} alignItems="center" container>
      <Grid item>
        <Avatar alt="Stephany Nusch" src="" style={STYLES.PROFILE_AVATAR} />
      </Grid>
      <Grid item>
        <Grid container direction="column" justify="center" alignItems="flex-start" alignContent="center" spacing={1}>
          <Grid item>
            <Typography variant="h1" align="center" style={STYLES.TITLE}>Nome do Candidato</Typography>
          </Grid>
          <Grid item>
            <Link style={STYLES.SUBTITLE} href="/" color="default">Editar perfil</Link>
          </Grid>
          <Grid>
            <Button variant="contained" color="secondary" size="small">Sair</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

