import { Link, useLocation, useHistory } from 'react-router-dom';
import './EditForm.css';

function EditForm (props) {
  const location = useLocation();
  let contact;
  if (props.newContact) {
    contact = {id: -1, fistName: '', lastName: '', number: '', email: ''}
  } else {
    contact = location.state.data;
  }
  const updateData = props.updateData;
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let id = contact.id;
    var updatedInfo = {id, firstName, lastName, number, email};
    updateData(updatedInfo);
    history.push('/')
  }

  return (
    <div>
      <form className = 'contact-info-form' onSubmit = {(event) => {handleSubmit(event)}}>
        <ul>
          <li>
            First Name:
            <input
              type="text"
              id = 'first'
              autoComplete = 'off'
              defaultValue={contact.firstName} />
          </li>
          <li>
            Last Name:
            <input
              type="text"
              id = 'last'
              autoComplete = 'off'
              defaultValue={contact.lastName} />
          </li>
          <li>
            Phone Number:
            <input
              type="text"
              id = 'number'
              autoComplete = 'off'
              defaultValue={contact.number} />
          </li>
          <li>
            Email:
            <input
              type="text"
              id = 'email'
              autoComplete = 'off'
             defaultValue={contact.email} />
          </li>
        </ul>
          <input type="submit" value="Submit"></input>
        <Link to = '/'>
          <button>Go back to list</button>
        </Link>
      </form>
    </div>
  )
}

export default EditForm;