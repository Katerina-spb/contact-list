import './Contact.css';
import { Link } from 'react-router-dom';

function Contact(props) {
  const confirmDelete = () => {
    if (window.confirm(`Are you sure you want to delete the contact for ${props.contact.firstName}?`)) {
      props.delete(props.contact.id);
    }
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
      </ul>
    </div>
  )
}

export default Contact;