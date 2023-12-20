import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/selectors';

import css from '../ContactForm.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <div className={css.contactsWrapper}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        <ul className={css.todoList}>
          {contacts.map(contact => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
