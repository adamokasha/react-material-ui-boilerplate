import React from 'react';

import NavMain from '../components/NavMain';
import SignUpForm from '../components/SignUpForm';

export const SignUpPage = () => {
  return (
    <div>
      <NavMain>
        <SignUpForm />
      </NavMain>
    </div>
  )
}

export default SignUpPage;