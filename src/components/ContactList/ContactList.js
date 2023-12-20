import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from '../ContactForm.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={css.contactsWrapper}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        <ul className={css.todoList}>
          {filterContacts.map(contact => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
