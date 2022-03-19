export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo,
});
export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id,
});
export const updateTodo = (todo) => ({
    type: "UPDATE_TODO",
    payload: todo,
});
export const addTodosaga = (todo) => ({
    type: "ADD_TODO_SAGA",
    payload: todo,
});
export const deleteTodosaga = (todo) => ({
    type: "DELETE_TODO_SAGA",
    payload: todo,
});
export const updateTodosaga = (todo) => ({
    type: "UPDATE_TODO_SAGA",
    payload: todo,
});
