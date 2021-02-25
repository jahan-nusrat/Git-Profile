import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/index';
import UserProfile from './pages/UserProfile/index';

const AppRoute = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={UserProfile} />
    </Router>
  )
}

export default AppRoute
