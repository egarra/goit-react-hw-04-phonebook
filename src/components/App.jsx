import { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]); 

const onFormSubmit = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    if (contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
    ) {
      Notify.failure('Contact with such name is already exist');
    } else {
      setContacts([contact, ...contacts])
    }
  }

const onDeleteContact = id => {
  setContacts(contacts.filter(contact => contact.id !== id))
  Notify.success('Contact is Deleted');
}

const onSearchByName = () => contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

const onInputChange = filter => {
  setFilter(filter)
}
 
  const filteredContacts = onSearchByName();
  return (
    <>
      <Section title="Phonebook">
        <Form onFormSubmit={onFormSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter onInputChange={onInputChange} />
      {contacts.length > 0 && <Contacts contactsList={filteredContacts} onDeleteContact={onDeleteContact} />}
      </Section>
    </>
  );
};
