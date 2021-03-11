import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          <Form>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' required ref={emailRef} />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' required ref={passwordRef} />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' required ref={passwordConfirmRef} />
            </Form.Group>
            <Button className='w-100' type='submit'>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className='w-100 text-center mt-2'>
          Already have an account? Log In
        </div>
      </Card>
    </>
  );
};

export default SignUp;
