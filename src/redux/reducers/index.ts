import { combineReducers } from 'redux';
import todo from './todo';
import persist from './persist';
import storage from './storage';

const rootReducer = combineReducers({ todo, persist, storage });

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
