import React from 'react';

const UserCard = ({ username, technicalSkills, profileImageUrl }) => {
    return (
        <div className="card bg-white rounded-lg overflow-hidden shadow-lg" style={{ width: '18rem' }}>
            <img src={profileImageUrl} className="card-img-top" alt="Profile" />
            <div className="card-body">
                <h5 className="card-title">{username}</h5>
                <p className="card-text">{technicalSkills}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default UserCard;
