import React  from 'react';

import {
    Box,
    Grid,
    Typography,
} from '@material-ui/core';

import GradeIcon from '@material-ui/icons/Grade';

import { STYLES } from '../../utils/constants';

export const Header = ({ company }) => {
    const renderStars = (rating) => {
        let stars = [];

        for (let i = 0; i < rating; i++) {
            stars.push(<GradeIcon color="primary" />);
        }

        for (let i = rating; i < 5; i++) {
            stars.push(<GradeIcon color="disabled" />);
        }

        return stars;
    };

    return (
        <Grid container spacing={10} direction="row" alignContent="center" alignItems="center" justify="center">
            <Grid item>
                <Box border={1} borderColor="grey.500" borderRadius={20} style={STYLES.COMPANY_LOGO.BOX}>
                    <img style={STYLES.COMPANY_LOGO.IMG} src={company.logo} />
                </Box>
            </Grid>
            <Grid item>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h2">{company.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3">{company.category}</Typography>
                    </Grid>
                    <Grid item>
                        {renderStars(Math.floor(company.rating))}
                    </Grid>
                    <Grid item>
                        <Typography><strong>Endereço:</strong></Typography>
                        <Typography variant="p">{company.location}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography><strong>CNPJ:</strong></Typography>
                        <Typography variant="p">{company.document}</Typography>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
