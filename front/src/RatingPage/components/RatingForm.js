import React from 'react';

import {
    Grid,
    Button,
    Typography,
    TextField,
    FormControl
} from '@material-ui/core';

export const RatingForm = () => (
    <Grid container justify="center" alignItems="center" direction="column" spacing={4} fullWidth>
        <Grid item xs={12}>
            <Typography variant="h3">Avaliar Empresa</Typography>
            <Typography>Aqui você pode contar como foi a sua experiência nessa empresa. Seja trabalhando nela ou apenas fazendo uma entrevista.</Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControl>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <TextField id="companyName" label="Nome da Empresa" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField id="rating" label="Nota" variant="outlined" fullWidth />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="rating" label="Avaliação" variant="outlined" multiline rows={4} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" size="large" fullWidth>Enviar</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </Grid>
    </Grid>
);

