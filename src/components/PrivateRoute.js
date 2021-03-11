import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        return currentUser ? children : <Redirect to='/login' />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
