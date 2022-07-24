import { useSelector} from 'react-redux';

import { ContactItem } from './ContactItem';
import s from './ContactList.module.css';
import { Bars} from 'react-loader-spinner';

export const ContactList = ({ contacts: { data: contacts, isFetching, isError } }) => {
  const filterValue = useSelector(state => state.filter);

  return (
    <>
      {isFetching && (
        <div  className={s.spinner}>
          <Bars color="#00BFFF" height={200} width={200} ariaLabel="loading" />
          </div>
      )}
      {!isFetching && !isError && contacts && (
    
        <ul className={s.list}>
        {contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filterValue.toLowerCase()),
            )
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, phone }) => {
              return <ContactItem contact={{ id, name, phone }} key={id} />;
            })}
       </ul>

      )}

      {isError && <h1>Data are not found</h1>}
    </>
  );
};