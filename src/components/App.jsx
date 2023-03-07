import { useEffect, useState } from "react"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./Container.styled";
import { Filter } from "./Filter/Filter";
import { GlobalStyles } from "./Global.styled";
import initialContacts from "../data/contacts.json";

const getInitialContacts = () => { 
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
  }

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevState => {
      const isAlreadyInContacts = [...prevState].some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
      if (isAlreadyInContacts) {
        alert(`${newContact.name} is already in contacts.`);
        return prevState;
      } else {
        return [...prevState, newContact];
      }
    });
  }

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  }

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

    return (
    <Container>
      <GlobalStyles />
      <h1>Phonebook</h1>
      <ContactForm onSave={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} />
    </Container>
  );
};
