import React from 'react'
import UserCard from './UserCard'

const CardContainer = () => {
    return (
        <div class="album py-5 ">
            <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    <div className="col">
                        <UserCard />
                    </div>
                    <div className="col">
                        <UserCard />
                    </div>
                    <div className="col">
                        <UserCard />
                    </div>
                    <div className="col">
                        <UserCard />
                    </div>
                    <div className="col">
                        <UserCard />
                    </div>
                    <div className="col">
                        <UserCard />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardContainer
