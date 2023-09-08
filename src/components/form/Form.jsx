import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import { useState } from 'react';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './Form.module.css';

const regEx = /^[a-zA-Z][a-zA-Z '-]*[a-zA-Z]$/;

export const Form = () => {
  const [sex, setSex] = useState('male');
  const [name, setName] = useState('');
  const [kid, setKid] = useState(null);

  const handleClick = e => {
    setSex(e.target.name);
  };

  const changeHandler = e => {
    setName(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const normalizedName = name.trim();
    if (normalizedName.length < 2) {
      Notify.failure('Name should be more then 1 letter', { timeout: 4000 });
      return;
    }
    if (!regEx.test(normalizedName)) {
      Notify.failure(
        "Please check kid's name: you can use letters, hyphen, apostrophe",
        { timeout: 4000 }
      );
      return;
    }
    if (normalizedName.includes(' and ')) {
      Notify.failure("You can't use word 'and'", { timeout: 4000 });
      return;
    }
    const kid = await axios.post('/add', { name: normalizedName, sex });
    setKid(kid);
  };

  return (
    <div className={css.wrapper}>
      {!kid ? (
        <form onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="name">
            Enter the Child's Name:
          </label>
          <input
            className={css.input}
            type="text"
            name="name"
            id="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="e.g. Daniel"
            value={name}
            onChange={changeHandler}
          />
          <ButtonGroup>
            <Button name="male" onClick={handleClick} active>
              BOY
            </Button>
            <Button name="female" onClick={handleClick}>
              GIRL
            </Button>
          </ButtonGroup>
          <Button type="submit">Let's shop</Button>
        </form>
      ) : (
        <>
          <span>
            registered kid: {kid.data.name} is {sex}
          </span>
          <Button
            onClick={() => {
              setKid(null);
            }}
            type="button"
          >
            Go back
          </Button>
        </>
      )}
    </div>
  );
};
