import React, { Component } from 'react';
import { Container, Title } from './App.styled';
import PhonebookSection from './phonebook/Phonebook';
import ContactsSection from './contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container>
        <Title>PHONEBOOK APP</Title>
        <PhonebookSection />
        <ContactsSection />
      </Container>
    );
  }
}
