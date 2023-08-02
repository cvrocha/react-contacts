import React from 'react'
import ModalDelete from './modalDelete';
import { useParams, Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import imageUser from '../assets/images/user-icon.jpg'
function Card(user){
    return (
        <div class="wrapper">

            <div class="profile-card js-profile-card" key={user.id}>
                <div class="profile-card__img">
                    <img src={user.image ? user.image : imageUser} alt="user" />
                </div>
                <div class="profile-card__cnt js-profile-cnt">
                    <div class="profile-card__name">{user.name}</div>
                    <div class="profile-card__txt">Contact: <strong>{user.phone}</strong></div>
                    <div class="profile-card__txt">Email: <strong>{user.email}</strong></div>
                    <div class="profile-card-ctr">
                        <Link to={`/details/${user.id}`}><button class="profile-card__button button--blue js-message-btn"><FaBars/>Details</button></Link>
                        <ModalDelete/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card