export const todoReducer=(state =[], action) => {
    switch (action.type) {
        case 'GET_TODO_LIST':
            return state;
        default:
            return state
    } 
}