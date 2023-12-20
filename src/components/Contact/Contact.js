import { useDispatch } from 'react-redux';
import css from '../ContactForm.module.css';
import { deleteContactAction } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const deleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <li className={css.contactListItem}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.telefon}>{contact.number}</p>
      <button
        onClick={() => deleteContact(contact.id)}
        className={css.btnDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
