import './App.css';
import ContactList from './ContactList';
import EditForm from './EditForm.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import contactsData from './contactsData.js';


function App() {
  const [contacts, setContacts] = useState(contactsData);

  const updateData = (updatedInfo) => {
    let changedContact = contacts.find(contact => contact.id === updatedInfo.id);
    let index = contacts.indexOf(changedContact);
    let tempArray = contacts.slice();
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

  const deleteContact = (id) => {
    let contactToDelete = contacts.find(element => element.id === id);
    let indexToDelete = contacts.indexOf(contactToDelete);
    let tempArray = contacts.slice();
    tempArray.splice(indexToDelete, 1);
    setContacts(tempArray);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={() => <ContactList contacts = {contacts} delete = {deleteContact} />} />
          <Route path='/edit' component={() => <EditForm updateData = {updateData} />} />
          <Route path='/add' component={() => <EditForm updateData = {updateData} newContact = {true} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
