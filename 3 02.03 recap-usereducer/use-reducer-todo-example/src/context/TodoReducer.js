//ACTION types as const (helpers)
export const ADD_TODO = 'ADD_TODO'; //declare action type as const 

//initial state for our reducer.
export const initialState = {
    todos:[]
}

//actions
export const addTodo = (payload) => ({
    type:ADD_TODO, //type of action that takes place
    payload //the data we're sending along wit that action
});

//reducer function --> reponsible for changing the state.
export const todoReducer = (currentState = initialState, action) => {
    if(action.type === ADD_TODO){ //which type of action was provided
        return {
            ...currentState,
            todos:[...currentState.todos, action.payload] //payload = todoitem
        }
    }
}


