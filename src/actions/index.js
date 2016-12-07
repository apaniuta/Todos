export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: Date.now(),
        text
    };
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const toggleAll = () => {
    return {
        type: 'TOGGLE_ALL',
    };
};

export const editTodo = (id, text) => {
    return {
        type: 'EDIT_TODO',
        id,
        text
    };
};

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    };
};

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        filter
    };
};
