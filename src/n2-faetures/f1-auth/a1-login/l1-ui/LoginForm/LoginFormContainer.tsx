import React from 'react';
import {LoginForm} from './LoginForm';

export const LoginFormContainer = React.memo(() => {
  return (
      <div>
          <LoginForm/>
      </div>
  )
});
