import { combineReducers } from "redux"

const INITIAL_STATE = {

}

const exampleReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_EMAIL':
            return { email: action.email };
        default:
          return state;
    }
}

const rootReducer = combineReducers({ exampleReducer })

export default rootReducer;

