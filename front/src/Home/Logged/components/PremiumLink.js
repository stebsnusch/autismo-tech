import React from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';
import { STYLES } from '../../../utils/constants';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const PremiumLink = () => {
    let history = useHistory();
    return (
        <Alert severity="warning" variant="outlined">
            <AlertTitle><strong>Seja uma empresa PREMIUM!</strong></AlertTitle>
  Como nosso pacote Premium, você pode destacar suas vagas e ter acompanhamento especializado para integrar e reter o seu candidato!<br /><br />
  <Button style={STYLES.PREMIUM_BUTTON} variant="outlined" size="large" onClick={() => {history.push('/premium')}}>Saiba mais</Button>
        </Alert>

    )
}