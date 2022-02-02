import * as actions from "./action.types";

export default (state, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return [...state, action.payload];
        case actions.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}