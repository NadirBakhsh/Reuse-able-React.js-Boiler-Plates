Folder And File Structure

SRC
|  |_compoenets
|	|_Index.js
|
|_config
     |_router
	|_Routes.js


Step 1 : Config
================

* command in cmd npm install react-router-dom
* Create Index.js File in components Folder
* Import All Components Files in Index.js and as veriable Export in Object

step2: Routes Set 
==================
*Create folder of routers in config folder
*create file Routes.js in router folder them Import this line
*import { BrowserRouter as Router, Route, Link } from "react-router-dom";
*import {
    Home,
    Deshboard
} from  '../../components/Index'

import Index File from Component which Contain All compenetes Files
  

*Now create funcation in Config/router/Routes.js

function Navigations() {
    return (
        <Router>            
            <div>
                <Route exact path="/" component={goto.Home} />
            </div>
        </Router>
    );
}

step 3 working in App.js
=======================
Import Navigations file From ./config/router/Routes.js

<Navigation />

Use in Render

Now your navigation has been config

Step 4 onClick change Routes
============================

if you want to change Routes onclick
create button pass event onClick
pass this code

this.props.history.push('/dashboard')

Like <button onClick={()=>this.props.history.push('/Deshboard')}>Deshboard</button>

If you Want to Create denymic Routes pass uses rouest like this

<Route path="/profile/:username" component={IndividualProfile} />
{/* this.props.match.params.username */}
