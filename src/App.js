import React, { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    )
      ? alert('This name already in contacts')
      : setContacts(contacts => [...contacts, data]);
  };

  const filterContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase),
    );
  };

  const filteredContacts = filterContacts();

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilter={e => setFilter(e.currentTarget.value)} />
      <ContactList
        items={filteredContacts}
        onDeleteContact={id => {
          setContacts(contacts =>
            contacts.filter(contact => contact.id !== id),
          );
        }}
      />
    </div>
  );
}

export default App;
