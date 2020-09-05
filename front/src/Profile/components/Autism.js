import React from 'react';

import {
  Grid,
  Button,
  Typography,
  TextField,
  FormControl
} from '@material-ui/core';

import AttachFileIcon from '@material-ui/icons/AttachFile';

export const Autism = () => {
  return (
    <Grid container justify="flex-start" alignItems="flex-start" direction="column" spacing={4} fullWidth>
      <Grid item xs={12}>
        <Typography variant="h3">Autismo</Typography>
        <Typography>Aqui você pode preencher todas as informações que considerar necessárias a respeito do seu tipo de autismo.</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4">Laudo ou Diagnóstico</Typography><br />
              <Button variant="outlined" startIcon={<AttachFileIcon />}>Anexar arquivo</Button> <br />
              <Typography variant="caption">Arquivos com extensão .jpg, .jpeg, .pdf</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Stims</Typography>
              <Typography component="p">Stimming ou stim são movimentos corporais repetitivos que autoestimulam um mais sentidos, de maneira regulada. Exemplo: abanar as mãos, balançar o corpo de forma ritmica, o uso da ecolalia na fala, enfileirar objetos, girar objetos, etc. Se você possui algum deles, comente abaixo.</Typography>
              <TextField id="fullName" label="Descrição" variant="outlined" multiline rows={4} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Hipersensibilidades</Typography>
              <Typography component="p">
                Liste abaixo suas hipersenssibilidades, se as tiver.
              </Typography>
              <TextField id="fullName" label="Descrição" variant="outlined" multiline rows={4} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Mais informações</Typography>
              <Typography component="p">
                Como você gosta de trabalhar? Sozinho ou em equipe? Como se sente em reuniões? Comente abaixo tudo o que você achar importante para que você se sinta confortável no ambiente de trabalho.
              </Typography>
              <TextField id="fullName" label="Descrição" variant="outlined" multiline rows={4} fullWidth />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
}