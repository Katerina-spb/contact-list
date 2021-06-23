import './Contact.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MyContext from './MyContext';

function Contact(props) {
  const [expanded, setExpanded] = useState(false);
  const handleDelete = React.useContext(MyContext);

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
      handleDelete(props.contact.id);
    }
  }

  let email;
  if (expanded) {
    email = <li>Email: {props.contact.email}</li>;
  } else {
    email = '';
  }

  return (
    <div className = 'card-container'>
      <ul>
        <li>Fist Name: {props.contact.firstName}</li>
        <li>Last Name: {props.contact.lastName}</li>
        <li>Phone number: {props.contact.number}</li>
        {email}
        <li><button className = 'expand-button' onClick = {handleExpand}>Show more info</button></li>
      </ul>

      <div className = 'buttons'>
        <Link
          to={{
            pathname: `/edit`,
            state: {
              data: props.contact,
              description: 'Edit existing contact'
            },
          }}>
          <button className = 'edit-btn'>Edit</button>
        </Link>
        <button className = 'delete-btn' onClick={confirmDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Contact;