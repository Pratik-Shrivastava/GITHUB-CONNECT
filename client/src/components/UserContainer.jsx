import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { getUserLanguages } from '../utils/getTechstack';

function UserContainer({ users }) {
    const [userLanguages, setUserLanguages] = useState({});

    useEffect(() => {
        async function fetchLanguages() {
            const languagesPromises = users.map(async user => {
                const languages = await getUserLanguages(user.login);
                return { username: user.login, languages };
            });

            const languagesData = await Promise.all(languagesPromises);
            const languagesMap = languagesData.reduce((acc, { username, languages }) => {
                acc[username] = languages;
                return acc;
            }, {});

            setUserLanguages(languagesMap);
        }

        if (users.length > 0) {
            fetchLanguages();
        }
    }, [users]);

    return (
        <div className="container mx-auto mt-8 px-4">
            <div className="flex gap-5 flex-wrap justify-center py-5">
                {users &&
                    users.map((user, index) =>
                        user?.login && (
                            <div key={index} className="col-span-1">
                                <UserCard
                                    username={user?.login}
                                    technicalSkills={userLanguages[user.login]?.join(', ') || 'Loading...'}
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
