import React from 'react';
import UserCard from './UserCard';

function UserContainer({ users }) {
    return (
        <div className="container mx-auto mt-8 px-4">
            <div className="flex gap-5 flex-wrap justify-center py-5">
                {users &&
                    users.map((user, index) =>
                        user?.login && (
                            <div key={index} className="col-span-1">
                                <UserCard
                                    username={user?.login}
                                    technicalSkills="ReactJS, HTML"
                                    profileImageUrl={user?.avatar_url}
                                />
                            </div>
                        )
                    )}
            </div>
        </div>
    );
}

export default UserContainer;
