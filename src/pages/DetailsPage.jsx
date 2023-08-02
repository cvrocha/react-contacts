import React from 'react';
import { Link, useParams } from "react-router-dom";
import List from '../../src/model/list';
import DetailsContacts from '../../src/components/detailsContacts'
import { FaHouseChimney } from "react-icons/fa6";

const DetailsPage = () => {
  const [ data, setData] = React.useState('create')
  
  const handleDelete = (id) => {
    setData(data.filter(item => id !== item.id))
  }

  React.useEffect(() => {
    const item = JSON.parse(localStorage.getItem("create"))
    setData(item)
  },[]) 
  
  
  return (
    <div className="container">
        <h1 className="title-header">Details Contacts</h1>
        <Link to="/"><button class="profile-card__button button--blue-dark"><FaHouseChimney/>Home</button></Link>
        <DetailsContacts
          id={data.id} 
          image={data.image} 
          name={data.name} 
          email={data.email} 
          phone={data.phone} 
          about={data.about} 
        />
    </div>
  );
};

export default DetailsPage;