import { useFetchContactsQuery } from '../../redux/api';
import {ContactForm} from '../ContactForm';
import {Filter} from '../Filter';
import {ContactList} from '../ContactList';

export function App() {
  const fetchContacts = useFetchContactsQuery();
    return (
      <div className="container">
        <h1>Phone Book</h1>
        <ContactForm contacts={fetchContacts} />
        <h2>Contacts</h2>
        <Filter
          title="Find contact by name" />
        <ContactList contacts={fetchContacts}/>
      </div>
    );
  }