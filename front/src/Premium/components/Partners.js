import React from 'react';

import {
    Card,
    Typography,
    Grid,
    CardContent,
    Box,
    Avatar,
} from '@material-ui/core';

import { STYLES } from '../../utils/constants';

export const Partners = () => {
    let partners = [
        {
            name: 'Dra. Nome Doutora',
            description: 'Formada em 1996 pela Universidade de São Paulo, Dra. Nome da Doutora fez contribuições significativas durante seus estudos e atua na área há mais de 20 anos.'
        },
        {
            name: 'Dra. Nome Doutora',
            description: 'Formada em 1996 pela Universidade de São Paulo, Dra. Nome da Doutora fez contribuições significativas durante seus estudos e atua na área há mais de 20 anos.'
        },
        {
            name: 'Dra. Nome Doutora',
            description: 'Formada em 1996 pela Universidade de São Paulo, Dra. Nome da Doutora fez contribuições significativas durante seus estudos e atua na área há mais de 20 anos.'
        },
    ]
    return (
        <Grid container direction="row" justify="space-around">
            {partners.map((item, index) => (
                <Grid key={index} xs={3} item>
                    <Card variant="outlined" style={STYLES.PREMIUM_CARDS}>
                        <CardContent style={STYLES.PREMIUM_CARDS.CHILDREN}>
                            <Grid
                                component={Box}
                                py={2}
                                container
                                direction="column"
                                justify="center"
                                alignContent="center"
                                spacing={4}
                                alignItems="center"
                                style={STYLES.PREMIUM_CARDS.CHILDREN}>
                                <Grid item>
                                    <Avatar style={STYLES.PROFILE_AVATAR} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3">
                                        {item.name}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography align="center" component="p">
                                        {item.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}