import { configureStore } from '@reduxjs/toolkit'

const initState = {
    todos: [
        /*{
            id: 1,
            task: "Do laundry",
            completed: false
        },
        {
            id: 2,
            task: "Get to gym",
            completed: false
        },
        {
            id: 3,
            task: "Cook Dinner",
            completed: false
        }*/
    ]
}
function todoStateReducer(state = initState, action) {
    if (action.type === "ADD_TODO") {
        return {
            ...state, todos: [...state.todos,
            {
                id: state.todos.length + 1,
                task: action.payload,
                completed: false
            }
            ]
        }
    }
    if (action.type === "HANDLE_CHANGE") {
        return {
            ...state,
            todos: state.todos.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }
    }
    if (action.type === "DELETE_TODO") {
        return {
            ...state, todos:
                [...state.todos.filter(todo =>
                    todo.id !== action.payload
                )]
        }
    }
    return state;
}
const store = configureStore({ reducer: todoStateReducer });

export default store;