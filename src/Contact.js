import './Contact.css';

function Contact(props) {
  return (
    <ul>
      <li>Fist Name: {props.contact.firstName}</li>
      <li>Last Name: {props.contact.lastName}</li>
      <li>Phone number: {props.contact.number}</li>
    </ul>
  )
}

export default Contact;