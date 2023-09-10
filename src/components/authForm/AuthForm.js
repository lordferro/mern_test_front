import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import { LoginForm } from 'components/formLogin/LoginForm';
import { RegistrationForm } from 'components/formRegistration/RegistrationForm';
import { useState } from 'react';

export const AuthForm = () => {
  const [form, setForm] = useState('registration');

  const handleClick = e => {
    setForm(e.target.name);
  };

  return (
    <>
      <span className="text">Please login or register</span>
      <ButtonGroup>
        <Button name="registration" active onClick={handleClick}>
          Registration
        </Button>
        <Button name="login" onClick={handleClick}>
          Login
        </Button>
      </ButtonGroup>
      {form === 'registration' ? <RegistrationForm /> : <LoginForm />}
    </>
  );
};
