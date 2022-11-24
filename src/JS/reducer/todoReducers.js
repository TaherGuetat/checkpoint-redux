import { ADDTASK, EDIT, FILTERTASK, TOGGLE_TODO } from "../actionTypes/todoTypes";

const initialState = { list: [] , filtert:'all'};

export const todoReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return { ...state, list: [...state.list, payload] };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id == payload ? { ...el, isdone: !el.isdone } : el
        ),
      };
    case FILTERTASK:
      
        return { ...state,filtert:payload }
     
      
      case EDIT:
        return{...state,list:state.list.map((el)=>el.id==payload.id?{...el,value:payload.value}:el)}

  

    default:
      return state;
  }
};
