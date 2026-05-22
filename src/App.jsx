import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount } from './redux/features/countSlice'
import { useState } from 'react'

const App = () => {
  // change the value
const dispatch=useDispatch();
// show the count change value
const counter=useSelector((state)=>state.counter.value)

const [Num, setNum] = useState();
  return (
    <div className='main'>
<h1>{counter}</h1>
<button style={{color: "blue"}} onClick={()=>{dispatch(increment()) }}>incremenmt</button>
<button onClick={()=>{dispatch(decrement()) }}>Decrement</button>
<div className="second">
  <input type='number' value={Num} onChange={(e)=>{setNum(e.target.value)}}/>
<button onClick={()=>{dispatch(incrementbyAmount(Number(Num))) }}>increment by amount </button>
</div>
    </div>
  )
}

export default App