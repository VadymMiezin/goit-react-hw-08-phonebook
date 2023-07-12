import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';
import { List, Item, Btn, Title } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <Title>Contacts</Title>
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            {contact.name + ' : ' + contact.number}
            {
              <Btn
                type="button"
                name="delete"
                onClick={() => dispatch(deleteContacts(contact.id))}
              >
                Delete
              </Btn>
            }
          </Item>
        ))}
      </List>
    </>
  );
};
