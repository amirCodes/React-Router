export const DELETE_POST = 'DELETE_POST';
export const FETCH_TABLE_DATA = 'FETCH_TABLE_DATA';
export const SELECTED_FILTERED_DATA = 'SELECTED_FILTERED_DATA';

const fakeServerData = [
    { id:1, name: 'John', age: 15, status: 'active' },
    { id:2, name: 'Amber', age: 40, status: 'active' },
    { id:3, name: 'Leslie', age: 25, status: 'inactive' },
    { id:4, name: 'Ben', age: 70, status: 'inactive' },
];

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: id
    };
}

export function fetchData() {
    return {
        type: FETCH_TABLE_DATA,
        payload: fakeServerData
    }

}

export function selectFilteredData(filteredData) {
    return{
        type: SELECTED_FILTERED_DATA,
        payload : filteredData
    }
}