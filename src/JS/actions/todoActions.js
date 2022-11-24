import { ADDTASK, EDIT, FILTERTASK, TOGGLE_TODO} from "../actionTypes/todoTypes"

export const addtask=(value)=>{
    return{type:ADDTASK,payload:{id:Math.random(),value,isdone:false}}
}
export const toggle_todo=(id)=>{
    return{type:TOGGLE_TODO,payload:id}
}
export const filtertask=(isdone)=>{
    return{type:FILTERTASK,payload:isdone}
}
export const edit=(el)=>{
    return{type:EDIT,payload:el}
}