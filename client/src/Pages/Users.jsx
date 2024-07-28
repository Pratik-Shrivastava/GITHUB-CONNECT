import React, { useEffect, useRef, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContainer from '../components/UserContainer';
import Loading from '../components/Loading';
import { getUserLanguages } from '../utils/getTechstack';

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [file, setFile] = useState(null);
    const [columnName, setColumnName] = useState(''); ``
    const [uploadLoading, setUploadLoading] = useState(false);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [userDetails, setUserDetails] = useState([]);

    const baseURL = "https://api.github.com/users";
    const uploadURL = "http://localhost:8084/github-connect/upload-excel";
    const downloadURL = "http://localhost:8084/github-connect/github-user-data/download-excel";

    const user = useRef('');
    const fileInputRef = useRef(null);

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
        }
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleColumnNameChange = (event) => {
        setColumnName(event.target.value);
    };

    const handleFileUpload = async () => {
        if (!file) {
            toast.error('No file selected');
            return;
        }
        if (!columnName) {
            toast.error('No column name specified');
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
            const usernames = result.data;

            const userPromises = usernames.map(username => fetch(`${baseURL}/${username}`)
                .then(res => res.json()));
            const userResults = await Promise.all(userPromises);

            const userDetails = await Promise.all(userResults.map(async (user) => {
                const languages = await getUserLanguages(user.login);
                // const activities = await getUserActivities(user.login);
                return {
                    name: user.name || user.login,
                    languages: languages.join(', '),
                    location: user.location || 'N/A',
                    activities: 100,
                    numberOfRepository: user.public_repos,
                    currentCompany: user.company || 'N/A',
                    followers: user.followers,
                    following: user.following
                };
            }));

            console.log('User Details:', JSON.stringify(userDetails, null, 2));

            // Update state with userDetails and set isFileUploaded to true
            setUserDetails(userDetails);
            setIsFileUploaded(true);

            setUsers(userResults);
            toast.success('File uploaded successfully');

            setFile(null);
            setColumnName('');
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }

        } catch (error) {
            console.error(error);
            toast.error('Error uploading file');
        } finally {
            setUploadLoading(false);
        }
    };

    const handleDownload = async () => {
        try {
            const response = await fetch(downloadURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            });

            console.log(response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'user_data.xls'); // Adjusted filename to match the server's response
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    useEffect(() => { }, []);

    return (
        <div className='p-5'>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className='flex flex-col items-center w-full'>

                <div className='flex justify-center items-center h-11 my-5 w-full ml-4'>
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
                <div className='flex justify-center items-center w-full mt-3 mr-60'>
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
                        placeholder='Specify column name...'
                        value={columnName}
                        onChange={handleColumnNameChange}
                        className='h-full md:w-1/3 w-2/3 text-gray-800 mx-0.5 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    />
                    <button
                        onClick={handleFileUpload}
                        className='bg-teal-500 text-white font-semibold px-4 py-2 ml-2 rounded-lg border-t border-r border-b border-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    >
                        Upload
                    </button>
                    {isFileUploaded && (
                        <button
                            className="bg-teal-500 text-white font-semibold px-4 py-2 ml-2 rounded-lg border-t border-r border-b border-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center"
                            onClick={handleDownload}
                        >
                            <FaDownload className="mr-2" />
                            Download User Details
                        </button>
                    )}

                </div>

                {uploadLoading && <Loading />}
            </div>

            {loading && !error && <Loading />}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && !error && <UserContainer users={users} />}
        </div>
    );
}

export default Users;
