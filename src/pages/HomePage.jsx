// Exemplo para a página inicial (HomePage.js)
import React from 'react';
import Card from '/var/www/html/projetos/react-contacts/web/src/components/card'
import { Link } from "react-router-dom";
import List from '/var/www/html/projetos/react-contacts/web/src/model/list';

const HomePage = () => {

  const [ data, setData] = React.useState(List)
  const handleDelete = (id) => {
    setData(data.filter(item => id !== item.id))
}

  return (
    <div className="container">
        <h1 className="title-header">React Contacts</h1>
        <Link to="/create"><button class="profile-card__button button--green">Create</button></Link>
        <div className="container">
          <div className="container-grid">
          {data.map((contact) => (
            <Card 
              id={contact.id}
              name={contact.name} 
              phone={contact.phone} 
              email={contact.email} 
              image={contact.image}
              list={List}
              callback={handleDelete}
            />
          ))}
          </div>
        </div>
    </div>
  );
};

export default HomePage;
