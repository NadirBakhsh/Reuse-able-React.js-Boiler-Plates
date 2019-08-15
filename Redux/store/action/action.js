import ActionTypes from '../constant/constant';

 export function update_user() {
    return dispatch => dispatch({type: ActionTypes.SET_USER, payload: "Ali"})
    }



/// export function permeter data get place in front of payload
// goto reducer
