import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import css from './components/ContactForm.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <ContactList />
    </div>
  );
};

export default App;
