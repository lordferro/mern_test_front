import Button from 'components/Button/Button';
import { useState } from 'react';
import axios from 'axios';
import css from './LoginForm.module.css';
import { setAuthHeader } from 'utils/setAuthHeader';
import { useStore } from 'hooks/zustand';
import { ColorRing } from 'react-loader-spinner';

export const LoginForm = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const { setUser, isFetching, toggleFetching } = useStore(state => ({
    setUser: state.setUser,
    isFetching: state.isFetching,
    toggleFetching: state.toggleFetching,
  }));

  const changeHandler = name => {
    return event => {
      setValues({ ...values, [name]: event.target.value });
    };
  };

  const onSubmit = async e => {
    e.preventDefault();
    toggleFetching()
    const { data } = await axios.post('/auth/login', values);
    setAuthHeader(data.token);
    setUser(data);
    toggleFetching()
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={onSubmit}>
        <label className={css.label} htmlFor="email">
          Enter e-mail:
        </label>
        <input
          className={css.input}
          type="email"
          name="email"
          id="email"
          required
          placeholder="e.g. example@email.com"
          value={values.email}
          onChange={changeHandler('email')}
        />
        <label className={css.label} htmlFor="password">
          Enter password:
        </label>
        <input
          className={css.input}
          type="password"
          name="password"
          id="password"
          required
          placeholder="e.g. Pass123456"
          value={values.password}
          onChange={changeHandler('password')}
        />
        <Button type="submit" disabled={isFetching}>
          <ColorRing
            visible={isFetching}
            height="30"
            width="30"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
          Log in
        </Button>
      </form>
    </div>
  );
};
