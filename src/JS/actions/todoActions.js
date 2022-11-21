import { ADDTASK, TODOLIST } from "../actionTypes/todoTypes"

export const addtask=(value)=>{
    return{type:ADDTASK,payload:{id:Math.random(),value}}
}
export const todolist=()=>{
    return {type:TODOLIST}
}