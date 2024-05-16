import { useState } from "react";
let z = 10;
function Counter() {
    let [x,setX] = useState(0)
    let [y,setY] = useState(1)
    
    return (
        <>
        Count X: {x} is {(x%2 == 0) ? 'Even' : 'Odd'}
         <button onClick={() => {setX(x+1)}}>Inc</button>
         <button onClick={() => {setX(x-1)}}>Dec</button>

         <br />

         Count Y: {y}
         <button onClick={() => {setY(y+1)}}>Inc</button>
         <button onClick={() => {setY(y-1)}}>Dec</button>

         <br />

         Count Z:{z}
         <button onClick={() => {z+=1}}>Inc</button>
         <button onClick={() => {z-=1}}>Dec</button>
         
        </>
        
    )
}
export default Counter;