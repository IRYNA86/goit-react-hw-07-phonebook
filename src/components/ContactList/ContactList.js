// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { useGetContactsQuery, useDeleteContactMutation } from 'components/store/contactsSlice';

import s from '../ContactList/ContactList.module.css'


function ContactList() {


  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);

  // const dispatch = useDispatch();

  // const getFilterContact = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  // const filterContact = getFilterContact();

  // console.log(filterContact)
 
const {data = [], isLoading} = useGetContactsQuery();
const [deleteContact] = useDeleteContactMutation();

const handleDeleteContact = async (id) => {
  await deleteContact(id)
}

if (isLoading) return <h1>Loading...</h1>

  return (
    <>
       {data.map(contact => (
        <li className={s.item} key={contact.id}>
          <span className={s.text}>{contact.name}:</span>
          <span> {contact.phone} </span>
          <button className={s.button} type="button" 
          onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

export default ContactList;

