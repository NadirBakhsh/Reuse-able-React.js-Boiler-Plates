Folder Stracture

src
 |__store
     |_action
     |	    |_action.js
     |			
     |_constant
     |	    |_constant.js
     |	
     |_reducer
     |	    |_reducer.js
     |      |_index.js
     |		
     |_index.js


step 1 : To create store in ./store/index.js
======

* import index.js file from reducer folder
	- Like this import rootReducer from './reducer';
* import create store and Middlleware from redux
	- like import {createStore, applyMiddleware} from 'redux';
* import thunk from 'redux-thunk for asancy code
	-like import thunk from 'redux-thunk';
* create store in variable store and export it

const store = createStore(
   rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;

Now finally your Code look like this

--------------------------------------------------------+
import rootReducer from './reducer';			|
import {createStore, applyMiddleware} from 'redux';	|
import thunk from 'redux-thunk';			|
const store = createStore(				|
    rootReducer,					|	
    {},							|
    applyMiddleware(thunk)				|
);							|
export default store;					|
--------------------------------------------------------+

Step 2 : Working in reducer Folder 
==================================
* in this folder create 2 file
- 1st index.js
- 2nd reducer.js (note you can create multiply file of reducer)

* working in reducer file
  -----------------------
- import constant file from constant folder
. like import ActionTypes from '../constant/constant';

. sign INITIAL_STATE in variable
. like const INITIAL_STATE = {userName: 'Testing Redux'}

. export default arrow function which contain two perameters
   state = INITIAL_STATE , action

. in arrow function use switch case pass action.type in perameter

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SignupUser:
            return ({
                ...state,
               	coming new Data
            })
         
        default:
            return state;
    }

}

step 3 : working in constant folder:
===================================
* create ActionTypes variable sign object
	in this file we will export action types
	import in reducer

Step 4: working in action folder
=================================
this is not compilcated
	these fucation are the javaScrepict or firebase funcation
	at the last line we returen this code
	return dispatch => dispatch({type: ActionTypes.here write type we use set data }) 

Step 5 : working in App.js
==========================
* now your configration all most done it
jus goto App.js file imort provider like
-import {Provider} from 'react-redux';
and import store like
-import store from './store';

and wrap navigation in provider like this

 <Provider store={store}>
        <Navigation />
  </Provider>

Now your configration has be completed 

Step 6 : where you wnat to get data or set Data
===============================================
import import { connect } from 'react-redux'

-use this fnction for geting data
function mapStateToProp(state) {
    return ({
        userName: state.root.userName
    })

-use this funcation use to set or update data
function mapDispatchToProp(dispatch) {
    return ({
        changeUserName: () => { dispatch(changeUserName()) }
    })
}

and wrap component in connect like
export default connect(mapStateToProp, mapDispatchToProp)(Home);
}


	