export const loadState = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    return savedTodos ? savedTodos : undefined;
};

export const lsMiddleware = store => next => action => {
    const result = next(action);
    const todos = JSON.stringify({
        todos: store.getState().todos
    });

    localStorage.setItem('todos', todos);

    return result;
};