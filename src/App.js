import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList';
import EditForm from './EditForm.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import contactsData from './contactsData.js';


function App() {
  const [contacts, setContacts] = useState(contactsData);

  const updateData = (updatedInfo) => {
    let changedContact = contacts.find(element => element.id === updatedInfo.id);
    let index = contacts.indexOf(changedContact);
    var tempArray = contacts.slice();

    //if this is a new contact
    if (index === -1) {
      var newId = contacts.length + 1;
      updatedInfo.id = newId;
      tempArray.push(updatedInfo)
    } else {
      tempArray[index] = updatedInfo;
    }
    setContacts(tempArray);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={() => <ContactList contacts = {contacts}/>} />
          <Route path='/edit' component={() => <EditForm updateData = {updateData} />} />
          <Route path='/add' component={() => <EditForm updateData = {updateData} newContact = {true} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
