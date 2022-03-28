import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsSection,
  ContactsList,
  ContactsItem,
  ContactsItemName,
  ContactsBtn,
} from './Contact.styled';

const ContactListItem = ({ name, number, onClickRemove }) => {
  return (
    <ContactsItem>
      <ContactsItemName>
        {name}: {number}
      </ContactsItemName>
      <ContactsBtn type="button" onClick={onClickRemove}>
        Delete
      </ContactsBtn>
    </ContactsItem>
  );
};

const ContactList = ({ filteredContacts, onRemove }) => {
  return (
    filteredContacts.length > 0 && (
      <ContactsSection>
        <ContactsList>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onClickRemove={() => onRemove(id)}
            />
          ))}
        </ContactsList>
      </ContactsSection>
    )
  );
};

export default ContactList;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};
