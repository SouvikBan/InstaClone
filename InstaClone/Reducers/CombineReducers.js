import {combineReducers} from 'redux'
import PostReducer from './PostReducers'

const allReducers=combineReducers({
    posts:PostReducer
});

export default allReducers;