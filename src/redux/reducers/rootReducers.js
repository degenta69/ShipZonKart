import {combineReducers} from 'redux'
import userReducer from './userReducer'
import screenModeReducer from './screenModeReducer'
import authReducer from './authReducer'

const rootReducer= combineReducers({
    userReducer,
    screenModeReducer,
    authReducer
})

export default rootReducer