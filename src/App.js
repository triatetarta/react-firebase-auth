import React from 'react';
import { Container } from 'react-bootstrap';
import SignUp from './components/SignUp';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

const App = () => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Switch>
          <PrivateRoute exact path='/'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/update-profile'>
            <UpdateProfile />
          </PrivateRoute>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/forgot-password'>
            <ForgotPassword />
          </Route>
        </Switch>
      </div>
    </Container>
  );
};

export default App;
