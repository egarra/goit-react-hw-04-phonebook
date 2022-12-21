import { useState } from 'react';
import { InputForm, Btn, InputField } from './Form.styled';

export const Form = ({onFormSubmit}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const inputChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value)
    } else {
      setNumber(event.target.value)
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(name, number);
    event.target.reset();
  };


    return (
      <InputForm onSubmit={handleSubmit}>
        <p>Name</p>
        <InputField
          placeholder="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputChange}
        />
        <p>Number</p>
        <InputField
          placeholder="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChange}
        />
        <Btn type="submit">Add contact</Btn>
      </InputForm>
    );
  }

