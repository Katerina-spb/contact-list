import Contact from './Contact.js';
import { Link } from 'react-router-dom';

function ContactList(props) {

  return (
    <div>
      <Link
        to={{
          pathname: `/add`,
          state: {
            data: null,
          },
        }}>
        <button>Add new contact</button>
      </Link>
      {props.contacts.map((contact) => {
        return (
          <Contact key= {contact.id} contact = {contact} delete = {props.delete}/>
        )
      })}
    </div>
  )

}

export default ContactList;