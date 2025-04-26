import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contact, handleDelete }) => {
  return (
    <ul className={s.contact_container}>
      {contact.map(contact => (
        <li key={contact.id} className={s.contact_item}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
