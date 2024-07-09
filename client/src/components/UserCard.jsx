import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ username, technicalSkills, profileImageUrl }) => {
    return (
        <div className="card bg-white rounded-lg overflow-hidden shadow-lg flex flex-col w-full md:w-80 lg:w-72 h-72 md:h-96">
            <img src={profileImageUrl} className="card-img-top" alt="Profile" style={{ height: '60%' }} />
            <div className="card-body flex flex-col justify-between h-full p-4">
                <div>
                    <h5 className="card-title text-lg text-black font-bold">{username}</h5>
                    <p className="card-text text-sm text-black mt-2">{technicalSkills}</p>

                </div>
                <Link to={`/${username}`}>
                    <div className="mt-3">
                        <span className="btn btn-primary text-gray-700 w-full">
                            View Profile
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default UserCard;
