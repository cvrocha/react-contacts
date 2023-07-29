import React from 'react'
import ModalDelete from './modalDelete';
import { Link } from "react-router-dom";
import List from '/var/www/html/projetos/react-contacts/web/src/model/list';


export default function Card({id, name, image ,phone, email, list, callback}){
    return (
        <div class="wrapper" key={id}>
            <div class="profile-card js-profile-card">
                    <div class="profile-card__img">
                        <img src={image} alt="user" />
                    </div>
                    <div class="profile-card__cnt js-profile-cnt">
                        <div class="profile-card__name">{name}</div>
                        <div class="profile-card__txt">Contact: <strong>{phone}</strong></div>
                        <div class="profile-card__txt">Email: <strong>{email}</strong></div>
                        <div class="profile-card-ctr">
                            <Link to={`/details/${id}`}><button class="profile-card__button button--blue js-message-btn">Details</button></Link>
                            <ModalDelete
                                id={id}
                                onDelete={callback}
                            />
                        </div>
                    </div>
            </div>
        </div>
    );
}
