import React from "react"  ;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'  ;

import HomePage from '../pages/home'  ;

import SignupPage from '../pages/signup'  ;

import LoginPage from '../pages/login'  ;

import PostsPage from '../pages/posts'  ;


const AllRoutes = () => {

    return (
    <Router>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/posts" component={PostsPage} />
        </Switch>
    </Router>
    )
}

export { AllRoutes }  ;