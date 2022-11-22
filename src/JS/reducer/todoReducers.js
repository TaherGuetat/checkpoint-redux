import { ADDTASK, EDIT, FILTER, TOGGLE_TODO } from "../actionTypes/todoTypes";

const initialState = { list: [] };

export const todoReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return { ...state, list: [...state.list, payload] };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id == payload.id ? { ...el, isdone: !el.isdone } : el
        ),
      };
    case FILTER:
      if (payload.isdone) {
        return { ...state, list: state.list.filter((el) => el.isdone) };
      }
      if (!payload.isdone) {
        return { ...state, list: state.list.filter((el) => !el.isdone) };
      } else {
        return state;
      }
      case EDIT:
        return{...state,list:[...state.list,payload]}

  

    default:
      return state;
  }
};
