import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByUser } from './CounterSlice'

function Counter() {
const counter=useSelector(state=>state.counter.value)
const dispatch=useDispatch()

  return (
    <div>
<button onClick={()=>dispatch(increment())}>+</button>
<button onClick={()=>dispatch(incrementByUser(4))}>+4</button>
<p>{counter}</p>
<button onClick={()=>dispatch(decrement())}>-</button>

    </div>
  )
}

export default Counter