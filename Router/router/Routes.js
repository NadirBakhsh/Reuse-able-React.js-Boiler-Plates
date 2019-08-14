import React from 'react'
import {
    Home,
    Deshboard
} from  '../../components/Index'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navigations() {
    return (
        <Router>            
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/Deshboard" component={Deshboard} />
            </div>
        </Router>
    );
}

export default Navigations


/* this.props.match.params.username */
//this.props.history.push('/dashboard')
