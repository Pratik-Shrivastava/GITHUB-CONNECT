import React from 'react'
import Logo from "../components/Logo"
import { Link } from "react-router-dom"

const UserProfile = () => {
    return (
        <>
            {/* <a href='#main' className='skip-to-content'>Skip to content</a> */}

            {/* Header */}
            <header className='header' data-header>
                <div className='container'>
                    <Link to="/" className='logo'>
                        <Logo />
                    </Link>

                    <div className='header-search'>
                        <button className='icon-btn search-toggler'
                            aria-controls='searchBox'
                            aria-expanded="false"
                            aria-label="Toggle search"
                            data-search-toggler>

                            <span class="material-symbols-rounded search-icon"
                                aria-hidden="true"
                            >search</span>

                            <span class="material-symbols-rounded close-icon"
                                aria-hidden="true"
                            >arrow_back</span>
                        </button>

                        <div className='search-box' id="searchBox">
                            <span class="material-symbols-rounded leading-icon"
                                aria-hidden="true"
                            >search</span>

                            <input
                                type="search"
                                name='search'
                                aria-label="search github username"
                                placeholder='Search username*'
                                id=''
                                className='search-field label-1'
                                data-search-field
                            />

                            <button
                                className='search-btn'
                                aria-label='Search-submit'
                                data-search-submit
                            >
                                <span class="material-symbols-rounded "
                                    aria-hidden="true"
                                >search</span>

                                <span className='label-1'>Search</span>
                            </button>
                        </div >
                    </div >

                    <button className='icon-btn theme-btn' aria-pressed="false"
                        aria-label="Toggle dark and light theme"
                        data-theme-btn>
                        <span class="material-symbols-rounded sun-icon"
                            aria-hidden="true">
                            light_mode</span>

                        <span class="material-symbols-rounded moon-icon"
                            aria-hidden="true"
                        >dark_mode</span>

                    </button>


                </div>
            </header>
        </>
    )
}

export default UserProfile
