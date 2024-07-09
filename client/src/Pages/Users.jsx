import React, { useEffect, useRef, useState } from 'react';
import UserContainer from '../components/UserContainer';
import Loading from '../components/Loading';

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    let baseURL = "https://api.github.com/users";

    const user = useRef('');

    async function getAllUsers() {
        if (user.current.value === "") {
            setLoading(true);
            try {
                const res = await fetch(baseURL);
                if (!res.ok) throw new Error('Failed to fetch users');
                const data = await res.json();
                setUsers(data);
                setLoading(null);
            } catch (error) {
                setError(error.message);
                setLoading(null); // Ensure loading state is reset on error
            }
        }
    }

    async function getUser() {
        setLoading(true);
        if (user.current.value !== '') {
            try {
                const res = await fetch(`${baseURL}/${user.current.value}`);
                if (!res.ok) throw new Error('User not found');
                const data = await res.json();
                setUsers([data]);
                setError(null);
            } catch (error) {
                setError(error.message);
                setUsers([]);
            } finally {
                setLoading(false);
            }
        } else {
            getAllUsers();
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []); // Run once on component mount

    return (
        <div>

            {/* Search bar */}
            <div className='flex justify-center items-center h-11 my-5 '>
                <input type='text'
                    placeholder='Search github username..'
                    className='h-full md:w-1/3 w-2/3 text-gray-800 px-6 font-semibold outline-none '
                    ref={user}
                />
                <button
                    className='bg-teal-500 font-semibold px-4 h-full'
                    onClick={getUser}>
                    Search
                </button>
            </div>

            {/* Render Loading component if loading is true */}
            {loading && !error && <Loading />}

            {/* Render error message if error is true */}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* Render UserContainer only if both loading is false and error is null */}
            {!loading && !error && <UserContainer users={users} />}
        </div>
    );
}

export default Users;
