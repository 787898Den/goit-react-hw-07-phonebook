import { useDeleteContactMutation } from '../../redux/api';
import s from './ContactList.module.css';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <li className={s.list__item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{number}</p>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};