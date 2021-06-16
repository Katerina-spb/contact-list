import Contact from './Contact.js';
import contactsData from './contactsData.js';

function ContactList() {
  console.log(contactsData)
  var contacts = [1,2,3,4,5,6,7];
  return (
    <div>
      {contactsData.map((contact) => {
        return (
          <Contact key= {contact.id} contact = {contact}/>
        )
      })}
    </div>
  )

}

export default ContactList;