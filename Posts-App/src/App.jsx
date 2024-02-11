import { useState } from 'react'  ;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'  ;

import React from 'react'  ;

import HomePage from './components/home'  ;

import SignupPage from './components/signup'  ;

import LoginPage from './components/login'  ;

import PostsPage from './components/posts'  ;

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/posts" component={PostsPage} />
      </Switch>
    </Router>
  )  ;
}

export default App  ;
