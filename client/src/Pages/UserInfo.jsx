import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

function UserInfo() {
    const [user, setUser] = useState([]);
    const { pathname } = useLocation();
    const navigate = useNavigate()
    let baseURL = "https://api.github.com/users";

    async function getUserInfo() {
        const res = await fetch(baseURL + pathname);
        const data = await res.json();
        console.log(data)
        setUser([data]);

    }

    useEffect(() => {
        getUserInfo();
    }, [pathname])

    return (
        <div className='py-5'>
            <button onClick={() => navigate("/get-connect")} className='px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded-lg text-gray-200'>
                BACK
            </button>

            {
                user && user?.map((userinfo, idx) => (
                    <div key={idx}></div>
                ))
            }
        </div>
    )
}

export default UserInfo
