import React from 'react';
import { useHistory } from "react-router-dom";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  IconButton,
  Box,
} from '@material-ui/core';

export const HeaderBackButton = () => {
  let history = useHistory();

  const goToPreviousPage = () => history.goBack();

  return (
    <Box p={4}>
      <IconButton onClick={goToPreviousPage}>
        <ArrowBackIcon />
      </IconButton>
    </Box>
  );
}