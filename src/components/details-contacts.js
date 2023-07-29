import React from 'react'
import { Link } from "react-router-dom";

export default function DetailsContacts ({id, name, image ,phone, email}){
    return (
        <div class="wrapper" key={id}>
            <div class="profile-card-details">
                    <div className="container-details">
                        <div className="details-info">
                            <div class="profile-card__img">
                                <img src={image} alt="user" />
                            </div>
                            <div class="profile-card__name">{name}</div>
                            <div class="profile-card__txt">Contact: <strong>{phone}</strong></div>
                            <div class="profile-card__txt">Email: <strong>{email}</strong></div>
                            <Link to="/edit"><button class="profile-card__button button--blue js-message-btn">Edit</button></Link>
                        </div>
                        <div className="details-desc">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
            </div>
        </div>
        );
}
