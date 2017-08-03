import {TEST_ME_REQUESTED} from './actions';


//import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';



const allReducers = combineReducers({
    form: formReducer
});

export default allReducers;