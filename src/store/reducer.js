import { combineReducers } from 'redux';
import characterList from './characterList';
import character from './character';

export default combineReducers({
    characterList,
    character,
});
