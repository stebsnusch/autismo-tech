import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Grid, Button } from '@material-ui/core';
import { STYLES, MENU_OPTIONS } from '../utils/constants';

export const Footer = () => {
    console.log(MENU_OPTIONS.APPLICANT);
    return (
        <Grid
            direction="row"
            justify="space-around"
            alignItems="space-around"
            alignContent="space-around"
            container
        >
            <Grid xs={4} item>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <img style={STYLES.FOOTER.LOGO} alt="Autismo Jobs" src={require('../assets/img/autismojobs-white.png')} />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Time 14 - Hackathon Autismo Tech, 2020
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={4} item>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    alignContent="center"
                    spacing={1}>
                    <Typography variant="h4">Menu</Typography>
                    {MENU_OPTIONS.APPLICANT.map((item, index) => (
                        <Grid item key={index}>
                            <Link style={STYLES.FOOTER.LINKS} to={item.path}>{item.label}</Link>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid xs={4} item>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <Typography variant="h4">Entre em contato</Typography>
                    </Grid>
                    <Grid item>
                        <Button color="secondary" variant="contained">Enviar e-mail</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};