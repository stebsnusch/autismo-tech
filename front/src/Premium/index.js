import React, { Fragment } from 'react';

import { HeaderBackButton } from '../Base/HeaderBackButton';

import {
    Container,
    Typography,
    Card,
    Box,
    Button,
    CardContent,
    Grid,
} from '@material-ui/core';

import { GoodPoints } from './components/GoodPoints';
import { Partners } from './components/Partners';
import { STYLES } from '../utils/constants';


export const Premium = () => {

    return (
        <Fragment>
            <HeaderBackButton />
            <Typography align="center" variant="h2">Conheça o nosso Plano Premium</Typography>
            <Typography align="center" component="p">Esteja entre as empresas mais bem colocadas do mercado.</Typography>
            <Box height="30px"></Box>
            <Box p={6} style={STYLES.PREMIUM_BACKGROUND2}>
                <Container maxWidth="lg">
                    <Typography variant="h3">Vantagens</Typography>
                    <br />
                    <br />
                    <GoodPoints />
                </Container>
            </Box>
            <Box p={6} style={STYLES.PREMIUM_BACKGROUND}>
                <Container maxWidth="lg">
                    <Typography variant="h3">Os melhores parceiros</Typography>
                    <br />
                    <br />
                    <Partners />
                </Container>
            </Box>
            <Container maxWidth="md">
                <Box p={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Grid container direction="row" spacing={2}>
                                <Grid item>
                                    <Typography variant="h2" color="secondary">ASSINE JÁ!</Typography>
                                    <Typography component="p">As melhores soluções são feitas a partir de variados pontos de vista. Uma empresa diversa muda o mundo para melhor!</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" size="large">Quero fazer parte!</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Fragment>
    );
}