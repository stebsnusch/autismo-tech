import React from 'react';

import {
    Grid,
    Box,
    Button,
    Card,
} from '@material-ui/core';

import GradeIcon from '@material-ui/icons/Grade';

import { STYLES } from '../../utils/constants';

import { getHighlightedCompanies } from '../api';

export const Companies = () => {

    const highlightedCompanies = getHighlightedCompanies();

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

    const renderCompanyInfo = (company) => (
        <Grid container direction="column" justify="center" alignContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <Box style={STYLES.COMPANIES_AVATAR.BOX}>
                    <img style={STYLES.COMPANIES_AVATAR.IMAGE} alt={company.name} src={company.logo} />
                </Box>
            </Grid>
            <Grid item>
                {renderStars(Math.floor(company.rating))}
            </Grid>
            <Grid item>
                <Button variant="outlined">Ver mais</Button>
            </Grid>
        </Grid>
    );

    return (
        <Grid container justify="space-around" direction="row" spacing={2}>
            {highlightedCompanies.map((company, index) => (
                <Grid item key={index}>
                    <Card style={STYLES.CARD_SPACING}>
                        {renderCompanyInfo(company)}
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};