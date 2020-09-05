import React from 'react';
import { useHistory } from "react-router-dom";

import {
  Box,
  Avatar,
  Typography,
  Grid,
  Button
} from '@material-ui/core';
import { STYLES } from '../../../utils/constants';

export const Header = ({userType}) => {
  let history = useHistory();

  return (
    <Box py={8}>
      <Grid direction="row" justify="flex-start" spacing={8} alignItems="center" container>
        <Grid item>
          <Avatar alt="Avatar" src="" style={STYLES.PROFILE_AVATAR} />
        </Grid>
        <Grid item>
          <Grid container direction="column" justify="center" alignItems="flex-start" alignContent="center" spacing={2}>
            <Grid item>
              <Typography variant="h2" component="h2" align="center" style={STYLES.TITLE}>
                {userType === 'company' ?
                 'Nome da Empresa':
                 'Nome do Candidato'}
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={() => history.push('/profile')} variant="contained">Editar perfil</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" size="small">Sair</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
};

