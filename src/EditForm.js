import { Link } from 'react-router-dom';
import './EditForm.css';

function EditForm () {
  return (
    <div>
      <form className = 'contact-info-form'>
        <ul>
          <li>
            First Name: <input type="text" value="Kate"></input>
          </li>
          <li>
            Last Name: <input type="text" value="fname"></input>
          </li>
          <li>
            Phone Number: <input type="text" value="fname"></input>
          </li>
          <li>
            Email: <input type="text" value="fname"></input>
          </li>
        </ul>
        <input type="submit" value="Submit"></input>
        <Link to = '/'>
        <button>back</button>
        </Link>
      </form>
    </div>
  )
}

export default EditForm;