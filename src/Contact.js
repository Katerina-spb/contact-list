import './Contact.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Contact(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (event) => {
    if (expanded === false) {
      event.target.innerHTML = 'Hide info';
    } else {
      event.target.innerHTML = 'Show more info';
    }
    setExpanded(!expanded);
  }

  const confirmDelete = () => {
    if (window.confirm(`Are you sure you want to delete the contact for ${props.contact.firstName}?`)) {
      props.delete(props.contact.id);
    }
  }

  let email;
  if (expanded) {
    email = <li>Email: {props.contact.email}</li>;
  } else {
    email = '';
  }

  return (
    <div>
      <Link
        to={{
          pathname: `/edit`,
          state: {
            data: props.contact,
          },
        }}>
        <button>Edit</button>
      </Link>
      <button onClick={confirmDelete}>Delete</button>

      <ul>
        <li>Fist Name: {props.contact.firstName}</li>
        <li>Last Name: {props.contact.lastName}</li>
        <li>Phone number: {props.contact.number}</li>
        {email}
        <li><button onClick = {handleExpand}>Show more info</button></li>
      </ul>
    </div>
  )
}

export default Contact;