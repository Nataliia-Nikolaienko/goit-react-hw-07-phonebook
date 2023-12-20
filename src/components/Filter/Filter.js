import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from '../ContactForm.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  return (
    <div className={css.filterContainer}>
      <label className={css.labelFilter}>Find contacts by name</label>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
