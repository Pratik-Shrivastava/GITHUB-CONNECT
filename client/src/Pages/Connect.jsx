import React from 'react'
import Instruction from '../components/Instruction'
import DropzoneComponent from '../components/DropzoneComponent'
import FileUpload from '../components/FileUpload/FileUpload.jsx'
import SearchBar from '../components/SearchBar.jsx'
import UserCard from '../components/UserCard.jsx'
import CardContainer from '../components/CardContainer.jsx'


const Connect = () => {
    return (<>


        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 ">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Instructions</h1>
                    <Instruction />

                </div>
                <div className="col-lg-6 mx-auto d-flex flex-column align-items-center">
                    <SearchBar />
                    <div className="my-4 d-flex align-items-center">
                        <hr className="flex-grow-1 me-3" />
                        <span className="fw-bold">OR</span>
                        <hr className="flex-grow-1 ms-3" />
                    </div>
                    <FileUpload />
                </div>
            </div>
        </div>
        {/* TODO : Conditional rendering after fetch successfull */}
        {/* <CardContainer /> */}
    </>
    )
}

export default Connect
