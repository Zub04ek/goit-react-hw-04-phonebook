import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Container } from "./Container.styled";
import { Filter } from "./Filter/Filter";
import { GlobalStyles } from "./Global.styled";
import initualContacts from "../data/contacts.json";

export class App extends Component {
  state = {
    contacts: initualContacts,
    filter: ''
  };

  componentDidMount() { 
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) { 
    this.state.contacts !== prevState.contacts && localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  };

  addContact = newContact => {
    this.setState(prevState => {
      return [...prevState.contacts].some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
        ? alert(`${newContact.name} is already in contacts.`)
        : { contacts: [...prevState.contacts, newContact] }
    });
  }

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }
    });
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
    <Container>
      <GlobalStyles />
      <h1>Phonebook</h1>
      <ContactForm onSave={this.addContact} />
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.changeFilter} />
      <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
    </Container>
  );
  }
};
