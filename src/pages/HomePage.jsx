import React from 'react';
import Card from '../../src/components/card'
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import Empty from '../components/Empty';
import List from '../model/list';

const HomePage = ({element}) => {

  const [ data, setData] = React.useState('create')
  
  const handleDelete = (id) => {
    setData(data.filter(element => id !== element.id))
  }

  React.useEffect(() => {
    const item = JSON.parse(localStorage.getItem("create"))
    setData(item)
  },[]) 

    return (
      <div className="container">
          <h1 className="title-header">React Contacts</h1>
          <Link to="/create"><button class="profile-card__button button--green"><FaCirclePlus /> Create</button></Link>
          <div className="container">
            <div className="container-grid">
              {element.length === 0 ? <Empty /> : element.map((item) => (
                <Card 
                id={item.id} 
                image={item.image} 
                name={item.name} 
                email={item.email} 
                phone={item.phone} 
                about={item.about} 
                callback={handleDelete} />
              ))}
              
            </div>
          </div>
      </div>
    );

};

export default HomePage;
