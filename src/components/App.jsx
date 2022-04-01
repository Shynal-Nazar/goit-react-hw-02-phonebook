import React, { Component } from 'react';
import { Container, Title } from './App.styled';
import PhonebookSection from './phonebook/Phonebook';
import ContactList from './contacts/ContactsList';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const contactInState = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contactInState) {
      alert(`${name} is already in contacts!`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleRemove = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <Title>PHONEBOOK APP</Title>
        <PhonebookSection contacts={contacts} onAddContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
        <ContactList
          filteredContacts={this.getFilteredContacts()}
          onRemove={this.handleRemove}
        />
      </Container>
    );
  }
}
