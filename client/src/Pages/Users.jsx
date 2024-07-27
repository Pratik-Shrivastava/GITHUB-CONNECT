import React, { useEffect, useRef, useState } from 'react';
import UserContainer from '../components/UserContainer';
import Loading from '../components/Loading';

function Users() {
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [file, setFile] = useState(null);
    const [columnName, setColumnName] = useState('');
    const [uploadMessage, setUploadMessage] = useState('');
    const [uploadLoading, setUploadLoading] = useState(false);

    const baseURL = "https://api.github.com/users";
    const uploadURL = "http://localhost:8084/github-connect/upload-excel";

    const user = useRef('');
    const fileInputRef = useRef(null);

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

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setUploadMessage('');
    };

    const handleColumnNameChange = (event) => {
        setColumnName(event.target.value);
    };

    const handleFileUpload = async () => {
        if (!file) {
            setUploadMessage('No file selected');
            return;
        }
        if (!columnName) {
            setUploadMessage('No column name specified');
            return;
        }

        setUploadLoading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('columnName', columnName);

        try {
            const response = await fetch(uploadURL, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) throw new Error('Failed to upload file');
            const result = await response.json();
            const usernames = result.data; // Get usernames from response

            // Fetch user data for each username
            const userPromises = usernames.map(username => fetch(`${baseURL}/${username}`).then(res => res.json()));
            const userResults = await Promise.all(userPromises);

            setUsers(userResults);
            setUserInfo(userResults);
            setUploadMessage('File uploaded successfully');

            // Clear file and column name inputs
            setFile(null);
            setColumnName('');
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }

            // Hide the success message after 3 seconds
            setTimeout(() => setUploadMessage(''), 2000);
        } catch (error) {
            setUploadMessage(error.message);
        } finally {
            setUploadLoading(false);
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []); // Run once on component mount

    return (
        <div className='p-5'>
            <div className='flex flex-col items-center w-full'>
                <div className='flex justify-center items-center h-11 my-5 w-full'>

                    <input
                        type='text'
                        placeholder='Search github username...'
                        className='h-full md:w-1/3 w-2/3 text-gray-800 mx-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
                        ref={user}
                    />
                    <button
                        className='bg-teal-500 text-white font-semibold px-4 py-2 rounded-lg border-t border-r border-b border-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500'
                        onClick={getUser}>
                        Search
                    </button>
                </div>
                OR
                {/* File upload and Column name input */}
                <div className='flex justify-center items-center w-full mt-3'>
                    <input
                        type='file'
                        onChange={handleFileChange}
                        className='block text-sm text-gray-500 
                            file:mr-2 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-teal-500 file:text-white
                            hover:file:bg-teal-600
                            focus:outline-none focus:ring-2 focus:ring-teal-500'
                        ref={fileInputRef}
                    />
                    <input
                        type='text'
                        placeholder='Enter column name...'
                        value={columnName}
                        onChange={handleColumnNameChange}
                        className='h-full md:w-1/3 w-2/3 text-gray-800 mx-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    />

                    <button
                        onClick={handleFileUpload}
                        className='bg-teal-500 text-white font-semibold px-4 py-2 ml-2 rounded-lg border-t border-r border-b border-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    >
                        Upload File
                    </button>
                </div>

                {uploadLoading && <Loading />}
                {uploadMessage && <p className="text-center mt-2">{uploadMessage}</p>}
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
