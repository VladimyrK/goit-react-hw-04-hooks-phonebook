import React, { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    contacts && this.setState({ contacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    contacts !== prevState.contacts &&
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  formSubmitHandler = data => {
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    )
      ? alert('This name already in contacts')
      : this.setState(({ contacts }) => {
          return {
            contacts: [...contacts, data],
          };
        });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase),
    );
  };

  filterHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilter={this.filterHandler} />
        <ContactList
          items={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
