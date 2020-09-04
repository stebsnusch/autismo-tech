import React from 'react';

import {
  Grid,
  Avatar,
  Button,
} from '@material-ui/core';
import { STYLES } from '../../utils/constants';

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

export const UpdatePhoto = () => {
  return (
    <Grid container justify="center" alignItems="center" direction="row" spacing={2}>
      <Grid item>
        <Avatar alt="Stephany Nusch" src="" style={STYLES.PROFILE_AVATAR} />
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Button startIcon={<PhotoCameraIcon />} variant="outlined">
              Carregar nova foto
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" size="small">Salvar</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}