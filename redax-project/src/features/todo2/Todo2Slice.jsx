import { createSlice } from "@reduxjs/toolkit";



export const todo2Slice=createSlice({
    name:"todo2",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        editTodo:(state,action)=>{
            const index=state.findIndex(todo=>todo.id===action.payload.id)
            state[index]=action.payload
        },
        deleteTodo:(state,action)=>{
return state.filter(todo=>todo.id!==action.payload)
        }
    
    }
})
export const {addTodo,editTodo,deleteTodo}=todo2Slice.actions
export default todo2Slice.reducer