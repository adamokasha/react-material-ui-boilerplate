import React from 'react';

import NavMain from '../components/NavMain';
import SignInForm from '../components/SignInForm'

export const LoginPage = () => {
  return (
    <div>
    <NavMain>
      <SignInForm />
    </NavMain>
    </div>
  )
}

export default LoginPage;