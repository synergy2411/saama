const {createStore} = require("redux");

const initialState = {
    counter : 0,
    result : []
}

// Reducers
const reducer = (state = initialState, action) => {
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    if(action.type === "ADD"){
        return {
            ...state,
            counter : state.counter + action.value
        }
    }
    return state;
}

// Store
const store = createStore(reducer)

// console.log(store.getState());

// Subscribe

store.subscribe(()=>{
    console.log("[SUBSCRIBE]", store.getState());
})

// Dispatching Action

store.dispatch({type : "INCREMENT"})
store.dispatch({type : "ADD", value : 10})
