import React from 'react';

import {
  Grid,
  Button,
  Typography,
  TextField,
  FormControl
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

export const PreviousExperience = () => {
  const renderExperience = () => (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item>
            <TextField id="fullName" label="Empresa" variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <Grid item>
          <TextField id="fullName" label="Cargo" variant="outlined" fullWidth />
        </Grid>
        <Grid item>
          <TextField id="fullName" label="Período de atuaçãO" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <TextField id="fullName" label="Descrição" variant="outlined" multiline rows={4} fullWidth />
      </Grid>
    </Grid>
  );

  return (
    <FormControl>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h4" component="h4">
            Experiência Anterior
            </Typography>
        </Grid>
        <Grid item>
          <Typography component="p">
            Se você tem experiência profissional anterior na área que deseja atuar, adicione-a. Caso não tenha, passe para o próximo item, "Competências".
            </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            startIcon={<AddIcon />}
            color="secondary"
            variant="contained"
            size="small">
            Adicionar Experiência
              </Button>
        </Grid>

      </Grid>
    </FormControl>
  )
};