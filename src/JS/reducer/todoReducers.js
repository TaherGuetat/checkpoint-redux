import { ADDTASK, TODOLIST } from '../actionTypes/todoTypes';

const initialState={todo:'',list:[]};

export const todoReducers = (state=initialState,action) => {
switch (action.type) {
    case ADDTASK:
        
        return{...state,list:[...state.list,action.payload]};

        case TODOLIST:
            return{...state,list:state.list}

    default:
        return state;
}
}
