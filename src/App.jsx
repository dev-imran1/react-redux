import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from './slice/counterSlice'


function App() {
  const count  = useSelector((state)=> state.counter.value);
  // let dcount = useSelector ((state)=>(state.counter.value))
  const dispatch = useDispatch()
  // console.log(dcount);
  // console.log(count);

  return (
    <>
    <span>{count}</span>
    <button onClick={()=>dispatch(increment(3))}>+</button>
     <button onClick={() => dispatch(decrement(5))}>-</button>
    </>
  )
}

export default App
