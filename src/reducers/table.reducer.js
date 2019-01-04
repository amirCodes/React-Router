import {
    DELETE_POST,
    FETCH_TABLE_DATA,
    SELECTED_FILTERED_DATA
} from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE= {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case DELETE_POST:
            return { serverData: _.reject(state.serverData, (obj) => {return  obj.id === action.payload})};
        case FETCH_TABLE_DATA:
            return {serverData: action.payload}; //[serverData]
        case SELECTED_FILTERED_DATA:
            return { serverData: action.payload };
        default:
            return state;
    }
}