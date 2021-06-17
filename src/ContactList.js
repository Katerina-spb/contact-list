import Contact from './Contact.js';

function ContactList(props) {

  return (
    <div>
      {props.contacts.map((contact) => {
        return (
          <Contact key= {contact.id} contact = {contact} />
        )
      })}
    </div>
  )

}

export default ContactList;