import React from 'react';

import {
  Grid,
  Avatar,
  Button,
  Typography,
  TextField,
  FormControl
} from '@material-ui/core';
import { STYLES } from '../../utils/constants';

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import { UpdatePhoto } from './UpdatePhoto';

export const PersonalInfo = () => {
  return (
    <Grid container justify="flex-start" alignItems="flex-start" direction="column" spacing={4} fullWidth>
      <Grid item>
        <Typography variant="h3">Informações Pessoais</Typography>
        <Typography>Aqui você coloca informações a seu respeito como pessoa física.</Typography>
      </Grid>
      <Grid item>
        <UpdatePhoto />
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField id="fullName" label="Nome Completo" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField id="fullName" label="Data de Nascimento" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField id="fullName" label="Gênero" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField id="fullName" label="Telefone Fixo" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField id="fullName" label="Telefone Celular" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField id="fullName" label="Endereço" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid xs={3} item>
                  <TextField id="fullName" label="E-mail" variant="outlined" fullWidth />
                </Grid>
                <Grid xs={3} item>
                  <TextField id="fullName" label="Linkedin" variant="outlined" fullWidth />
                </Grid>
                <Grid xs={3} item>
                  <TextField id="fullName" label="Github" variant="outlined" fullWidth />
                </Grid>
                <Grid xs={3} item>
                  <TextField id="fullName" label="StackOverflow" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
}