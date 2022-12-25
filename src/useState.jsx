import React, { useState } from 'react'

const Example = () => {
    const [count,setCount]=useState(0);

const increment=()=>{
    // setCount(count+1)
    // setCount((prevCount)=>{
    //     return prevCount+1;
    // })
    setCount((prevCount)=>prevCount+1);
    setCount((prevCount)=>prevCount+1);
    
}
const decrement=()=>{
    // setCount(count-1)
    // setCount((prevCount)=>{
    //     return prevCount-1;
    // })
    setCount((prevCount)=>prevCount-1);
}

  return (
    <div>
      <button onClick={increment}>Inc(+)</button>
      <span> <b>{count}</b> </span>
      <button onClick={decrement}>Dec(-)</button>
    </div>
  )
}

export default Example
