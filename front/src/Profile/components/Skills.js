import React, { useEffect } from 'react';

import {
  Grid,
  Button,
  Typography,
  TextField,
  FormControl
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

export const Skills = () => {

  const SkillTemplate = () => (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={4}>
        <TextField id="fullName" label="Competência" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={2}>
        <TextField id="fullName" label="Anos de Experiência" variant="outlined" fullWidth />
      </Grid>
    </Grid>
  );

  let skillList = [
    <SkillTemplate />
  ];

  const renderNewSkill = () => {
    console.log(skillList)
    return skillList.push(<SkillTemplate />);
  };

  useEffect(() => {
    
  }, [skillList]);

  return (
    <FormControl>
      <Grid container direcion="column" spacing={2}>
        <Grid item xs={12}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4" component="h4">
                Competências
            </Typography>
            </Grid>
            <Grid item>
              <Typography component="p">
                Coloque aqui as habilidades que você possui na área onde deseja atuar.
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {skillList}
        </Grid>
        <Grid item xs={12}>
          <Button
            startIcon={<AddIcon />}
            color="secondary"
            variant="contained"
            size="small"
            onClick={renderNewSkill}>
            Adicionar Competência
              </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}