import {combineReducers} from 'redux'
import fileData from './fileDataReducer'
import fileList from './fileListReducer'

export default combineReducers({fileData, fileList});