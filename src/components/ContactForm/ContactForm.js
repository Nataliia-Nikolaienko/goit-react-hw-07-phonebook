import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'api/contacts';
import { selectContacts } from '../../redux/selectors';

import css from '../ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addSingleContact = ({ name, number, phone }) => {
    const nameContact = contacts.find(contact => contact.name === name);
    const numberContact = contacts.find(
      contact => contact.number === number || contact.name === phone
    );
    if (nameContact) {
      return alert(`${name} is already in contacts.`);
    } else if (numberContact) {
      return alert(`${number} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
    }
  };
  // console.log('contacts', contacts);

  const handleSubmit = e => {
    e.preventDefault();
    addSingleContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <div className={css.formWrapper}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>

      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.nameInputContainer}>
          <label htmlFor="exampleInputTitle" className={css.label}>
            Name
          </label>
          <input
            className={css.input}
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </div>
        <div className={css.telWrapper}>
          <label htmlFor="exampleInputTel" className={css.label}>
            Number
          </label>
          <input
            className={css.input}
            name="number"
            type="tel"
            id="exampleInputTel"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </div>
        <button type="submit" className={css.btnCreate}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
