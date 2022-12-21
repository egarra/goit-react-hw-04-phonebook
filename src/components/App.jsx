import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  onFormSubmit = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.failure('Contact with such name is already exist');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
      Notify.success('Contact is added');
    }
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    Notify.success('Contact is Deleted');
  };

  onSearchByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  onInputChange = filter => {
    this.setState({
      filter,
    });
  };

  render() {
    const filteredToDos = this.onSearchByName();
    return (
      <>
        <Section title="Phonebook">
          <Form onFormSubmit={this.onFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter onInputChange={this.onInputChange} />
          {this.state.contacts.length > 0 
            ? <Contacts
            contactsList={filteredToDos}
            onDeleteContact={this.onDeleteContact}
          /> : null}
        </Section>
      </>
    );
  }
}
