import { Link } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";
import imageUser from '../assets/images/user-icon.jpg'

export default function DetailsContacts (userDetails){
    return (
        <div class="wrapper" key={userDetails.id}>
            <div class="profile-card-details">
                    <div className="container-details">
                        <div className="details-info">
                            <div class="profile-card__img">
                                <img src={userDetails.image ? userDetails.image : imageUser} alt="user" />
                            </div>
                            <div class="profile-card__name">{userDetails.name}</div>
                            <div class="profile-card__txt">Contact: <strong>{userDetails.phone}</strong></div>
                            <div class="profile-card__txt">Email: <strong>{userDetails.email}</strong></div>
                            <Link to={`/edit/${userDetails.id}`}><button class="profile-card__button button--blue js-message-btn"><FaPenToSquare/>Edit</button></Link>
                        </div>
                        <div className="details-desc">
                            <p>{userDetails.about}</p>
                        </div>
                    </div>
            </div>
        </div>
        );
}
