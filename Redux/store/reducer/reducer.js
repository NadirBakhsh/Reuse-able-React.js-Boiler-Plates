import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: "Testing React redux",
    
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER: {
            return {...state, userName: action.payload}
        }
        
        default:
            return state;
    }

}