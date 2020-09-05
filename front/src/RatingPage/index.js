import React from 'react';
import { HeaderBackButton } from '../Base/HeaderBackButton';
import { RatingForm } from './components/RatingForm';

import {
    Container,
    Box,
} from '@material-ui/core';

import { STYLES } from '../utils/constants';

export const RatingPage = () => {
    return (
        <Box style={STYLES.MAIN_CONTENT}>
            <HeaderBackButton />
            <Container maxWidth="lg">
                <RatingForm />
            </Container>
        </Box>
    );
}