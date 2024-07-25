import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContainer from '../components/UserContainer';
import Loading from '../components/Loading';
import Tabs from '../components/Tabs';
import Repo from '../components/Repos';
import Events from '../components/Events';

const UserInfo = () => {
    const [user, setUser] = useState([]);
    const [type, setType] = useState('repos');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(null);

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const baseURL = 'https://api.github.com/users';

    async function getUserInfo() {
        const res = await fetch(baseURL + pathname);
        const data = await res.json();
        setUser([data]);
    }

    async function getUrls() {
        setUsers([]);
        setLoading(true);
        const res = await fetch(baseURL + pathname + `/${type}`);
        const data = await res.json();
        setUsers(data);
        setLoading(null);
    }

    useEffect(() => {
        getUserInfo();
        getUrls();
    }, [pathname, type]);

    return (
        <div className='py-5 flex flex-col lg:flex-row'>
            <div className='lg:w-1/4 w-full flex flex-col items-center lg:items-start p-4'>
                <button
                    onClick={() => navigate('/get-connect')}
                    className='px-3 py-1 font-medium mx-1 my-4 bg-teal-600 rounded-lg text-gray-200 text-sm'
                >
                    BACK
                </button>

                {user &&
                    user.map((userinfo, idx) => (
                        <div key={idx} className='text-center lg:text-left bg-gray-900 p-3 leading-8 rounded-lg'>
                            <img
                                src={userinfo.avatar_url}
                                className='w-[150px] lg:w-[250px] border-4 border-teal-400 mx-auto lg:mx-0 rounded-full mb-4 shadow-lg transition-transform duration-300 hover:scale-105'
                            />

                            <div className='text-lg leading-10 px-3 text-gray-300'>
                                <h1 className='text-3xl pb-4'>{userinfo.name}</h1>
                                <h1>
                                    <span className='text-teal-400'>Login_name</span> : {userinfo.login}
                                </h1>
                                <h1>
                                    <span className='text-teal-400'>Followers</span> : {userinfo.followers}
                                </h1>
                                <h1>
                                    <span className='text-teal-400'>Following</span> : {userinfo.following}
                                </h1>
                                <h1>
                                    <span className='text-teal-400'>Public Repositories</span> : {userinfo.public_repos}
                                </h1>
                                <h1>
                                    <span className='text-teal-400'>Join Date</span> : {new Date(userinfo.created_at).toLocaleDateString()}
                                </h1>
                                <a
                                    href={userinfo.html_url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-gray-200 font-semibold rounded cursor-pointer px-3 py-1 bg-teal-600 my-3 tracking-wide inline-block text-sm'
                                >
                                    Visit
                                </a>
                            </div>
                        </div>
                    ))}
            </div>

            <div className='lg:w-3/4 w-full p-4'>
                <div className='flex border-b pb-4 gap-6 mt-4 lg:mt-0 mb-6 justify-center md:text-xl bg-gray-900 p-3 leading-8 rounded-lg'>
                    <Tabs type={type} setType={setType} />
                </div>

                {loading && <Loading />}

                {type === 'repos' && (
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7 w-full'>
                        {users && <Repo users={users} />}
                    </div>
                )}
                {type === 'received_events' && (
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7 w-full'>
                        {users && <Events data={users} />}
                    </div>
                )}
                {type === 'followers' && <UserContainer users={users} />}
            </div>
        </div>
    );
};

export default UserInfo;
