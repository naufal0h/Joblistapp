import React from 'react'
import { Routes, Route } from 'react-router-dom'

// General
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import ListJob from '../pages/job/ListJob'
import DetailJob from '../pages/job/DetailJob'

const MainContent = () => {

    return (
        <>
            <div className='container-fluid'>
            <Routes>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/" element={<ListJob></ListJob>}></Route>
                <Route path="/detail/:id" element={<DetailJob></DetailJob>}></Route>
            </Routes>
            </div>
        </>
    );
}

export default MainContent