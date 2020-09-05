import React, { Fragment } from 'react';

import { Logged } from '../Home/Logged';
import { Standard } from '../Home/Standard';

export const Home = ({userType}) => {

  const isLogged = true;

  return (
    <Fragment>
      {
        isLogged ?
          <Logged userType={userType} /> :
          <Standard />
      }
    </Fragment>
  )
}