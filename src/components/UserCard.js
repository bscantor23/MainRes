import React from 'react';
import { Link } from 'react-router-dom';
import '../UserCard.css';

const User = ({ user }) => {
    return (
        <div className="card">
            <div className="number-card">
                {user.id}.
            </div>
            <div className="user-content">
                <div className="image-card-container">
                    <img className="image-card" src={user.avatar} alt="" />
                </div>
                <div className="info-user">
                    <h3>{user.first_name} {user.last_name}</h3><hr />
                </div>
                <div className="buttons-container">
                    <Link to={`/usuarios/${user.id}`}>
                        <span class="material-icons button-card more-button">face</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default User