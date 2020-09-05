import React, { Fragment, useState } from 'react';
import { useParams } from "react-router-dom";

import {
    Container,
    Box,
    Tabs,
    Tab,
    Typography,
    Grid,
} from '@material-ui/core';

import { getCompany } from './api.js';

import { STYLES } from '../utils/constants';
import { HeaderBackButton } from '../Base/HeaderBackButton';

import { Header } from './components/Header';
import { TabPanel } from './components/TabPanel.js';
import { AboutTab, RatingTab, PositionsTab } from './constants.js';

export const CompanyPage = () => {
    const [currentTab, setCurrentTab] = useState(0);
    let companyId = useParams().companyId;

    const currentCompany = getCompany(companyId);

    let manageTabs = (event, newValue) => {
        console.log(newValue);
        setCurrentTab(newValue);
    };

    const createTabIndex = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Fragment>
            <HeaderBackButton />
            <Box p={6}>
                <Container maxWidth="lg">
                    <Grid container direction="column" spacing={4}>
                        <Grid item>
                            <Header company={currentCompany} />
                        </Grid>

                        <Grid item>
                            <Tabs
                                style={STYLES.FULLWIDTH}
                                value={currentTab}
                                indicatorColor="secondary"
                                textColor="secondary"
                                onChange={manageTabs}
                                aria-label="disabled tabs example"
                                centered
                            >
                                <Tab label="Sobre" {...createTabIndex(0)} />
                                <Tab label="Avaliações" {...createTabIndex(1)} />
                                <Tab label="Vagas" {...createTabIndex(2)} />
                            </Tabs>
                        </Grid>
                    </Grid>
                    <Box pt={6}>
                        <TabPanel value={currentTab} index={0}>
                            <AboutTab company={currentCompany} />
                        </TabPanel>
                        <TabPanel value={currentTab} index={1}>
                            <RatingTab company={currentCompany} />
                        </TabPanel>
                        <TabPanel value={currentTab} index={2}>
                            <PositionsTab company={currentCompany} />
                        </TabPanel>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    );
}