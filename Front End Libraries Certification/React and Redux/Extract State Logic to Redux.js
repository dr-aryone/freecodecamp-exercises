// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

function addMessage(msg){
    return {
        type: ADD,
        message: msg
    };
};

const messageReducer = (state = [], action) => {
    switch(action.type){
        case ADD: return [...state, action.message];
        default: return state
    };
};

const store = Redux.createStore(messageReducer);

//optionally store.dispatch(addMessage())