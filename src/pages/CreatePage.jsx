import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import '../css/form.css';
import List from "../model/list";

function Create() {
    const [data, setData] = useState({})
    const [pushForm, setPushForm] = useState({})

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const submit = e => {
        e.preventDefault()
        List.push(data)
        console.log(List)
    }
    React.useEffect(() => {
        const item = localStorage.setItem("create", JSON.stringify(data))
        setPushForm(item)
    },[data])
    
    return (
        <div className="container">
            <h1 className="title-header">Create Contacts</h1>
            <Link to="/"><button class="profile-card__button button--blue-dark"><FaHouseChimney/>Home</button></Link>
            <form onSubmit={submit} className="form-contato">
                <div className="input_fields flex-input col-2">
                    <label htmlFor="image">Image</label>
                    <input id="image" name="image" type="file" accept="image/*"></input>
                </div>
                <div className="flex-input">
                    <label for="name" className="profile-card__txt"><strong>Name</strong></label>
                    <input onChange={updateData} type="text" id="name" name="name" minLength="5" required/>
                </div>
                <div className="flex-input">
                    <label for="phone" className="profile-card__txt"><strong>Phone</strong></label>
                    <input onChange={updateData} type="tel" id="phone" name="phone" minLength="9" required/>
                </div>
                <div className="flex-input col-2">
                    <label for="email" className="profile-card__txt"><strong>Email</strong></label>
                    <input onChange={updateData} type="text" id="email" name="email"/>
                </div>
                <div className="flex-input col-2">
                    <label for="about" className="profile-card__txt"><strong>About</strong></label>
                    <textarea onChange={updateData} rows="10" id="about" name="about"></textarea>
                </div>
                <button className="profile-card__button button--green" type="submit"><FaCirclePlus /> Create </button>
            </form>
        </div>
    );
}

export default Create