import { Component } from 'react';
import { InputForm, Btn, InputField } from './Form.styled';

export class Form extends Component {
  state = {
    nameValue: '',
    phoneValue: '',
  };

  inputChange = event => {
    this.setState(
      event.target.name === 'name'
        ? { nameValue: event.target.value }
        : { phoneValue: event.target.value }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.nameValue, this.state.phoneValue);
    event.target.reset();
  };

  render() {
    return (
      <InputForm onSubmit={this.handleSubmit}>
        <p>Name</p>
        <InputField
          placeholder="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.inputChange}
        />
        <p>Number</p>
        <InputField
          placeholder="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.inputChange}
        />
        <Btn type="submit">Add contact</Btn>
      </InputForm>
    );
  }
}
