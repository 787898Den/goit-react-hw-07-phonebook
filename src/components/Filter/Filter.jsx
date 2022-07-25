import { useSelector, useDispatch } from 'react-redux';
import  {changeFilter} from 'redux/filter/actions';
import { getFilter } from 'redux/filter/selectors';
import s from './Filter.module.css';

export const Filter = ({ title }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <span className={s.label__title}>{title}</span>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};