import React from "react"  ;

import { Routes, Route } from 'react-router-dom'  ;

import HomePage from '../pages/home'  ;

import SignupPage from '../pages/signup'  ;

import LoginPage from '../pages/login'  ;

import PostsPage from '../pages/posts'  ;


const AllRoutes = () => {

    return (
    <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={ < SignupPage />} />
            <Route path="/login" element={< LoginPage />} />
            <Route path="/posts" element={ <PostsPage />} />
    </Routes>
    )
}

export { AllRoutes }  ;