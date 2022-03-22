import React from 'react';
import {
  PhoneSection,
  PhoneSectionName,
  PhoneForm,
  PhoneLabel,
  PhoneInput,
  PhoneBtn,
} from './Phonebook.styled';

const PhonebookSection = () => {
  return (
    <PhoneSection>
      <PhoneSectionName>Phonebook</PhoneSectionName>
      <PhoneForm>
        <PhoneLabel>
          Name
          <PhoneInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </PhoneLabel>
        <PhoneBtn
          type="submit"
          onClick={event => {
            event.preventDefault();
          }}
        >
          Add contacts
        </PhoneBtn>
      </PhoneForm>
    </PhoneSection>
  );
};

export default PhonebookSection;
