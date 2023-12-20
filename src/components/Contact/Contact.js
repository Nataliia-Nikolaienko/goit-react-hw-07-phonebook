import { useDispatch } from 'react-redux';
import css from '../ContactForm.module.css';
import { deleteContact } from 'api/contacts';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactListItem}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.telefon}>{contact.number || contact.phone}</p>
      <button onClick={handleDelete} className={css.btnDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
