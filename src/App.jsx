import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import Loader from 'components/Loader/Loader';

import { selectError, selectIsLoading } from './redux/selectors';
import { fetchContacts } from 'api/contacts';

import css from './components/ContactForm.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.container}>
          {error && <h1>{error}</h1>}
          <div>
            <ContactForm />
            <Filter />
          </div>
          <ContactList />
        </div>
      )}
    </>
  );
};

export default App;
