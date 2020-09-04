import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Grid } from '@material-ui/core';
import { STYLES, MENU_OPTIONS } from '../../utils/constants';

export const Menu = () => {
    const history = useHistory();
    const goToNextPage = (path) => history.push(path);
    console.log(history);
    return (
        <Grid
            direction="column"
            container
            spacing={3}
        >

            {MENU_OPTIONS.APPLICANT.map((option, index) => (
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
            ))}
        </Grid>
    );
};