import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList';
import Contact from './Contact';
import EditForm from './EditForm.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ContactList} />
          <Route path="/edit" exact component={EditForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
