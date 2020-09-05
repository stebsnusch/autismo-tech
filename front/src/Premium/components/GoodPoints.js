import React, { Fragment } from 'react';

import {
    Card,
    Typography,
    Grid,
    CardContent,
    Box,
} from '@material-ui/core';

import { STYLES } from '../../utils/constants';

import DoneAllIcon from '@material-ui/icons/DoneAll';
import MoodIcon from '@material-ui/icons/Mood';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export const GoodPoints = () => {
    let goodPoints = [
        {
            title: 'Assertividade',
            description: 'Com acompanhamento especializado, sua empresa garante o conforto do candidato, bem como transparência e boa comunicação durante o processo seletivo.',
            icon: <DoneAllIcon style={{ fontSize: 120 }} />,
        },
        {
            title: 'Retenção',
            description: 'Sua empresa aumenta consideravelmente as chances de retenção do candidato após um processo de integração eficiente.',
            icon: <MoodIcon style={{ fontSize: 120 }} />,
        },
        {
            title: 'Confiabilidade',
            description: 'Esteja em contato com os profissionais mais qualificados para o trabalho. Nossos parceiros são conhecidos por sua contribuição positiva para a comunidade autista.',
            icon: <AssignmentIndIcon style={{ fontSize: 120 }} />,
        }
    ];

    return (
        <Grid container direction="row" justify="space-around">
            {goodPoints.map((item, index) => (
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
                                    <Box style={STYLES.PREMIUM_ICONS} borderRadius="50%">
                                        {item.icon}
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3">
                                        {item.title}
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