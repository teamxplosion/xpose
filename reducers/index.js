
import { combineReducers } from 'redux'
import { LOGIN, UPDATE_EMAIL, UPDATE_PASSWORD, SIGNUP, FETCH_USERS } from '../actions/user'

const user = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        case FETCH_USERS:
            return { ...state, users: action.payload}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user
})

export default rootReducer