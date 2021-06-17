import './Contact.css';
import { Link } from 'react-router-dom';

function Contact(props) {

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

      <ul>
        <li>Fist Name: {props.contact.firstName}</li>
        <li>Last Name: {props.contact.lastName}</li>
        <li>Phone number: {props.contact.number}</li>
      </ul>
    </div>
  )
}

export default Contact;