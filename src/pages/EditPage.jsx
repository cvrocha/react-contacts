import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import '../css/form.css';

function Edit() {
    const [ data, setData] = React.useState('create')

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const submit = e => {
        e.preventDefault()
        console.log(data)
    }

    const handleDelete = (id) => {
        setData(data.filter(item => id !== item.id))
    }
    
    React.useEffect(() => {
        const item = JSON.parse(localStorage.getItem("create"))
        setData(item)
    },[]) 
        
    return (
        <div className="container">
            <h1 className="title-header">Create Contacts</h1>
            <Link to="/"><button class="profile-card__button button--blue-dark"><FaHouseChimney/>Home</button></Link>
            <form onSubmit={submit} className="form-contato">
                {/* {<div className="photoDetails"> <img alt="Selected Image" /> </div>} */}
                <div className="input_fields flex-input col-2">
                    <label htmlFor="image">Image</label>
                    <input id="image" name="image" type="file" accept="image/*" value={data.image}></input>
                </div>
                <div className="flex-input">
                    <label for="name" className="profile-card__txt"><strong>Name</strong></label>
                    <input onChange={updateData} type="text" id="name" name="name" minLength="5" required value={data.name}/>
                </div>
                <div className="flex-input">
                    <label for="phone" className="profile-card__txt"><strong>Phone</strong></label>
                    <input onChange={updateData} type="tel" id="phone" name="phone" minLength="9" required value={data.phone}/>
                </div>
                <div className="flex-input col-2">
                    <label for="email" className="profile-card__txt"><strong>Email</strong></label>
                    <input onChange={updateData} type="text" id="email" name="email" value={data.email}/>
                </div>
                <div className="flex-input col-2">
                    <label for="about" className="profile-card__txt"><strong>About</strong></label>
                    <textarea onChange={updateData} rows="10" id="about" name="about" value={data.about}></textarea>
                </div>
                <button className="profile-card__button button--blue js-message-btn" type="submit"><FaPenToSquare/> Edit </button>
            </form>
        </div>
    );
}

export default Edit