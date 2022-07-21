import {ContactForm} from '../ContactForm';
import {Filter} from '../Filter';
import {ContactList} from '../ContactList';

export function App() {
 
    return (
      <div className="container">
        <h1>Phone Book</h1>
        <ContactForm  />
        <h2>Contacts</h2>
        <Filter
          title="Find contact by name" 
        />
        <ContactList
        />
      </div>
    );
  }