import React from 'react';
import { Link, useParams } from "react-router-dom";
import List from '/var/www/html/projetos/react-contacts/web/src/model/list';
import DetailsContacts from '/var/www/html/projetos/react-contacts/web/src/components/details-contacts'

const DetailsPage = () => {
  const {id} = useParams()
  const contacts = List.find((contact) => contact.id === parseInt(id))
  console.log(contacts)
  return (
    <div className="container">
        <h1 className="title-header">Details Contacts</h1>
        <Link to="/"><button class="profile-card__button button--blue-dark">Home</button></Link>
        <div className="container">
            <DetailsContacts
              id={contacts.id}
              name={contacts.name} 
              phone={contacts.phone} 
              email={contacts.email} 
              image={contacts.image}
            />
        </div>
    </div>
  );
};

export default DetailsPage;