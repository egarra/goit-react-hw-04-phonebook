import { List, ListItem, Text, Btn } from './Contacts.styled';

export const Contacts = ({ contactsList, onDeleteContact }) => {
  return (
    <List>
      {contactsList.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Btn type="button" onClick={() => onDeleteContact(id)}>
              Delete Contact
            </Btn>
          </ListItem>
        );
      })}
    </List>
  );
};
