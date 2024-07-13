import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ username, technicalSkills, profileImageUrl }) => {
    return (
        <div className="card bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:shadow-xl hover:scale-105 flex flex-col w-full md:w-64 lg:w-60 h-64 md:h-80">
            <img src={profileImageUrl} className="card-img-top w-full h-3/5 object-cover" alt="Profile" />
            <div className="card-body flex flex-col justify-between h-full p-4">
                <div>
                    <h5 className="card-title text-lg text-teal-700 font-bold">{username}</h5>
                    <p className="card-text text-sm text-gray-700 mt-2">{technicalSkills}</p>
                </div>
                <Link to={`/${username}`}>
                    <div className="mt-3">
                        <span className="btn border border-teal-600 text-teal-600 font-semibold text-sm py-1 px-2 rounded-md hover:bg-teal-600 hover:text-white transition duration-300">
                            View Profile
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default UserCard;
