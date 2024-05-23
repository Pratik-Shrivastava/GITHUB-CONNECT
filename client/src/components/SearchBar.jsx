import React from 'react'

const SearchBar = () => {
    return (
        <form className="d-flex" role="search">

            <input className="form-control me-2" type="search" placeholder="Search by username" aria-label="Search" />
            <button className="btn btn-outline-info" type="submit">Search</button>
        </form>
    )
}

export default SearchBar
