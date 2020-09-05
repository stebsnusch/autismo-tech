import React, { Fragment } from 'react';

import {
    Chip,
    Card,
    Typography,
    Grid,
    CardContent,
    Box,
} from '@material-ui/core';

export const AboutTab = ({ company }) => (
    <Grid container spacing={3}>
        <Grid item>
            <Typography variant="h2">Sobre a empresa</Typography>
            <Typography variant="p" gutterBottom>{company.description}</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h2">Publicações</Typography>
            <Typography variant="p">{company.description}</Typography>
        </Grid>

    </Grid>
);

export const RatingTab = ({ company }) => (
    <Grid container direction="column" spacing={3}>
        {ratings.map((item, index) => (
            <Grid item key={index}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h3" gutterBottom>Cargo: {item.position}</Typography>
                        <Typography variant="h4" gutterBottom><strong>Nota:</strong> {item.rating}</Typography>
                        <Typography variant="p"><strong>Avaliação:</strong> {item.description}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
);

export const PositionsTab = ({ company }) => (
    <Grid container direction="column" spacing={3}>
        {positions.map((item, index) => (
            <Grid item key={index}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Typography variant="h4" gutterBottom>{item.name}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="p" gutterBottom>
                                    <strong>Descrição:</strong> {item.description}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" spacing={1}>
                                    {item.tags.map((tag, tagIndex) => (

                                        <Grid key={tagIndex} item>
                                            <Chip color="default" label={tag} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
);

const positions = [
    {
        name: 'Desenvolvedor de Software',
        tags: [
            'Banco de Dados',
            'SQL',
            'MongoDB',
            'MySQL',
        ],
        location: 'São Paulo',
        description: 'Será responsável por criar migrações para no Banco de Dados.',
    },
    {
        name: 'Desenvolvedor de Software',
        tags: [
            'Banco de Dados',
            'SQL',
            'MongoDB',
            'MySQL',
        ],
        location: 'São Paulo',
        description: 'Será responsável por criar migrações para no Banco de Dados.',
    },
    {
        name: 'Desenvolvedor de Software',
        tags: [
            'Banco de Dados',
            'SQL',
            'MongoDB',
            'MySQL',
        ],
        location: 'São Paulo',
        description: 'Será responsável por criar migrações para no Banco de Dados.',
    },
    {
        name: 'Desenvolvedor de Software',
        tags: [
            'Banco de Dados',
            'SQL',
            'MongoDB',
            'MySQL',
        ],
        location: 'São Paulo',
        description: 'Será responsável por criar migrações para no Banco de Dados.',
    },
];

const ratings = [
    {
        position: 'Desenvolvedor de Software',
        rating: 5,
        description: 'Fui muito bem tratado na empresa. Todos me acolheram muito bem e nunca passei por nenhum tipo de preconceito.'
    },
    {
        position: 'Desenvolvedor de Software',
        rating: 5,
        description: 'Fui muito bem tratado na empresa. Todos me acolheram muito bem e nunca passei por nenhum tipo de preconceito.'
    },
    {
        position: 'Desenvolvedor de Software',
        rating: 5,
        description: 'Fui muito bem tratado na empresa. Todos me acolheram muito bem e nunca passei por nenhum tipo de preconceito.'
    },
    {
        position: 'Desenvolvedor de Software',
        rating: 5,
        description: 'Fui muito bem tratado na empresa. Todos me acolheram muito bem e nunca passei por nenhum tipo de preconceito.'
    },
    {
        position: 'Desenvolvedor de Software',
        rating: 5,
        description: 'Fui muito bem tratado na empresa. Todos me acolheram muito bem e nunca passei por nenhum tipo de preconceito.'
    },
    {
        position: 'Desenvolvedor de Software',
        rating: 5,
        description: 'Fui muito bem tratado na empresa. Todos me acolheram muito bem e nunca passei por nenhum tipo de preconceito.'
    },
]