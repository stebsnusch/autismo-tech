import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Grid } from '@material-ui/core';
import { STYLES, MENU_OPTIONS } from '../../../utils/constants';

export const Menu = ({userType}) => {
    const history = useHistory();
    const goToNextPage = (path) => history.push(path);

    const renderMenu = (option, index) => (
        <Grid key={index} item>
            <Button
                size="large"
                color="primary"
                startIcon={option.icon}
                style={STYLES.MAIN_MENU}
                variant="contained"
                onClick={() => goToNextPage(option.path)}
                fullWidth
            >
                {option.label}
            </Button>
        </Grid>
    );

    return (
        <Grid
            direction="column"
            container
            spacing={3}
        >

            {userType === 'company' ?
                MENU_OPTIONS.COMPANY.map(renderMenu) :
                MENU_OPTIONS.APPLICANT.map(renderMenu)
            }
        </Grid>
    );
};