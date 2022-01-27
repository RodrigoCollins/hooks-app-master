import React from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import LogInScreen from './LogInScreen'
import Navbar from './Navbar'

const AppRouter = () => {
    return (
        <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/about' component={AboutScreen}/>
                <Route exact path='/home' component={HomeScreen}/>
                <Route exact path='/login' component={LogInScreen}/>
                <Redirect to='/home'/>
            </Switch>            
        </div>
        </Router>
    )
}

export default AppRouter
