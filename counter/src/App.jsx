import { useState } from 'react'
 
import './App.css'

function App() {
 let [counter , awaiscounter]=useState(0)


  // let counter = 5

   const addValue = ()=>{
      if (counter>=20) {
        reset()
      }
    else{
     awaiscounter(counter+1)
   }
  }

   const removevalue = ()=>{
     if (counter< 1) {
        reset()
      }
    else{
     awaiscounter(counter-1)
   }
   }
   const  reset= ()=>{
    awaiscounter(counter=0)
   }
  return (

    <>
     <h1>Counter through React </h1>
     <h2>Counter Value: {counter}</h2>


     <button onClick={addValue}>Add Value{counter}</button> <br />
     <button onClick={removevalue}>Remove Value {counter} </button><br />
     <p>footer: {counter}</p><br />
     <button onClick={reset}>Reset me{counter}</button>  
    </>
  )
}

export default App
