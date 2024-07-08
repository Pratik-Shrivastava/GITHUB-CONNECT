import React from 'react';
import UserCard from './UserCard';

const UserProfile = ({ userData }) => {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">User Profiles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Render UserCard component with userData */}
                {userData ? (
                    <UserCard
                        username={userData.login}
                        technicalSkills="HTML, CSS, JavaScript, React" // Replace with actual skills if available
                        profileImageUrl={userData.avatar_url}
                    />
                ) : (
                    <p className="text-center text-gray-600">Enter a GitHub username above to search for profiles.</p>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
