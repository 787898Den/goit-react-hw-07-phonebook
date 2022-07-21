import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import actions from 'redux/actions';
import { ContactItem } from './ContactItem';
import s from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={id => dispatch(actions.contactDelete(id))}
          />
        );
      })}
    </ul>
  );
};