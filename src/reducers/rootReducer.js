import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import listReducer from './listReducer';
import detailReducer from './detailReducer';
import { reducer as form } from 'redux-form'

export default combineReducers({
 simpleReducer,
 listReducer,
 detailReducer,
 form 
});