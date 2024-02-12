import { useState } from "react"
function Try() {
   
   const [Counter, setCounter] = useState(15)

   const addvalue = ( ) => {
     setCounter(Counter + 1)
   }
   const subvalue = ( ) => {
    setCounter(Counter - 1)
   }
 return(
    <>
     <h1>Counter</h1>
     <h2>count is {Counter} </h2>
     <button onClick={addvalue}>Add</button> <br />
      <button onClick={subvalue}>Subtract</button>
    </>
 )
}

export default Try