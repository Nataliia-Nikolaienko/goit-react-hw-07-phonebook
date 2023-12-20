import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contactsSlice';
import css from '../ContactForm.module.css';

const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.labelFilter}>Find contacts by name</label>
      <input className={css.filterInput} type="text" onChange={handleChange} />
    </div>
  );
};

export default Filter;
