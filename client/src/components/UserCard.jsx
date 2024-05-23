import React, { useState, useEffect } from 'react';

const UserCard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/sneha-2510');
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    setUserData(data);
                } else {
                    console.error('Failed to fetch user data:', response.statusText);
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="card border-0 shadow-sm" style={{ width: '100%' }}>
            {userData && (
                <>
                    <img
                        src={userData.avatar_url}
                        className="card-img-top border-bottom"
                        alt="User Profile Pic"
                        style={{ borderBottom: '1px solid #dee2e6' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{userData.name || 'User Name'}</h5>
                        <p className="card-text">
                            {userData.bio || 'User details'}
                        </p>
                        <a href={userData.html_url} className="btn btn-info">
                            See profile
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserCard;
