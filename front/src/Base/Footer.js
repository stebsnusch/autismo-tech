import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { STYLES, MENU_OPTIONS } from '../utils/constants';

export const Footer = () => {
    console.log(MENU_OPTIONS.APPLICANT);
    return (
        <Grid
            direction="row"
            justify="space-around"
            container
        >
            <Grid xs={4} item>
                <Grid container spacing={1}>
                    <Grid item>
                        <img style={STYLES.FOOTER.LOGO} alt="Autismo Jobs" src={require('../assets/img/autismojobs-white.png')} />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Autismo.jobs
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={4} item>

            </Grid>
            <Grid xs={4} item>

            </Grid>
        </Grid>
    );
};