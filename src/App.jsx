import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');

    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Deni St', number: '048-14-88' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-5', name: 'John Doe', number: '123-45-67' },
          { id: 'id-6', name: 'Jane Smith', number: '987-65-43' },
          { id: 'id-7', name: 'Alice Johnson', number: '555-12-34' },
        ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id),
    );
  };

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter),
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox handleFilter={handleFilter} />
      <ContactList contact={filteredContacts} handleDelete={handleDelete} />
    </>
  );
}

export default App;
