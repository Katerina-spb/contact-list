import Contact from './Contact.js';
import { Link } from 'react-router-dom';
import './ContactList.css';

function ContactList(props) {

  return (
    <div className = 'list-container'>
      <h1>Contact List</h1>
      <div className = 'add-contact-btn'>
        <Link
          to={{
            pathname: `/add`,
             state: {
              data: null,
              description: "Create new contact"
            },
          }}>
          <button>Add new contact</button>
        </Link>
      </div>

      <div className = 'scroll-list'>
        {props.contacts.map((contact) => {
          return (
            <Contact key= {contact.id} contact = {contact} delete = {props.delete}/>
          )
        })}
      </div>

    </div>
  )

}

export default ContactList;