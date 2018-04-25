import React from 'react';
import  { Route,Redirect } from 'react-router-dom';

export function PrivateRoute ({component: Component, authed, ...rest}) {
  console.log(authed);
    return (
      <Route
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/signIn', state: {from: props.location}}} />}
      />
    )
  }