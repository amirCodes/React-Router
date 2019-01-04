import { combineReducers } from 'redux';
import tableReducer from '../reducers/table.reducer';

const rootReducer = combineReducers({
    table: tableReducer
});

export default rootReducer;
