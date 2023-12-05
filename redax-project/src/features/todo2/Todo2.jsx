import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from './Todo2Slice'
import { v4 as uuidv4 } from "uuid";
function Todo2() {
    const [inp, setInp] = useState('')
    const [editId, setEditId] = useState()
    const todo2 = useSelector((state) => state.todo2)
    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(addTodo({
            id: uuidv4(),
            text: inp
        }))
        setInp(" ")
    }
    const handleEdit = (todo2) => {
        dispatch(editTodo(
            setInp(todo2.text),
            setEditId(todo2.id)
        ))
    }
    const handleSave = () => {
        dispatch(editTodo({
            id: editId,
            text: inp
        }

        ))
        setInp("")
        setEditId(null)
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }
    return (
        <div>
            <input value={inp} type="text" onChange={(e) => setInp(e.target.value)} />


            {
                editId ? (<button onClick={handleSave}>save</button>) : (<button onClick={handleAdd}>add</button>)

            }
            <ul>
                {
                    todo2.map((todo2) => (
                        <li key={todo2.id}>{todo2.text}
                            <button onClick={() => handleEdit(todo2)}>edit</button>
                            <button onClick={() => handleDelete(todo2.id)}>del</button>
                        </li>
                    ))
                }</ul>
        </div>
    )
}

export default Todo2