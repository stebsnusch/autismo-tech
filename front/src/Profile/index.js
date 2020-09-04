import React, { Fragment, useState } from 'react';

import {
    Container,
    Typography,
    ClickAwayListener,
    Tooltip,
    IconButton,
    Divider,
    Box,
} from '@material-ui/core';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import { STYLES } from '../utils/constants';

import { HeaderBackButton } from '../Base/HeaderBackButton';
import { PersonalInfo } from './components/PersonalInfo';
import { ProfessionalInfo } from './components/ProfessionalInfo';
import { Autism } from './components/Autism';

export const Profile = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    const tooltipInstructions = 'Este é um botão de informações. Ao lado dos campos deste formulário, você irá encontrar mais botões como este. Clique neles para ver detalhes sobre o campo que você quer preencher.'

    const renderInfoWithToolTip = () => (
        <ClickAwayListener>
            <Tooltip
                PopperProps={{
                    disablePortal: true,
                }}
                onClose={toggleTooltip}
                open={tooltipOpen}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                style={STYLES.TOOLTIPS}
                title={tooltipInstructions}
            >
                <IconButton>
                    <InfoOutlinedIcon onClick={toggleTooltip} />
                </IconButton>
            </Tooltip>
        </ClickAwayListener>

    );

    return (
        <Fragment>
            <HeaderBackButton />
            <Container maxWidth="lg">
                <Typography component="h2" variant="h2">Edição de Perfil</Typography>
                <Box height="30px"></Box>
                <Typography component="p">
                    Seu perfil está dividido em três partes: Informações Pessoais, Informações Profissionais e Informações sobre seu Autismo.
                </Typography>
                {/* <Typography component="p">
                    Em caso de dúvidas, clique no botão {renderInfoWithToolTip()}
                    ao lado do campo para ver uma descrição sobre seu preenchimento.
                </Typography> */}
                <Box height="30px"></Box>
                <Divider />
                <Box height="30px"></Box>
                <PersonalInfo />
                <Box height="30px"></Box>
                <Divider />
                <Box height="30px"></Box>
                <ProfessionalInfo />
                <Box height="30px"></Box>
                <Divider />
                <Box height="30px"></Box>
                <Autism />
            </Container>
        </Fragment>
    );
};