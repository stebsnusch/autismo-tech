import React from 'react';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { PreviousExperience } from './PreviousExperience';
import { Skills } from './Skills';

export const ProfessionalInfo = () => {
  return (
    <Grid container justify="flex-start" alignItems="flex-start" direction="column" spacing={4} fullWidth>
      <Grid item xs={12}>
        <Typography variant="h3">Informações Profissionais</Typography>
        <Typography>Aqui você coloca informações a seu respeito como profissional.</Typography>
      </Grid>
      <Grid item xs={12}>
        <PreviousExperience />
      </Grid>
      <Grid item xs={12}>
        <Skills />
      </Grid>
    </Grid>
  );
}