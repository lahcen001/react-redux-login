import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {theme} from "../features/theme"
function ChangeColor() {
const [color,setColor] = useState("red")


const dispatch = useDispatch()
  return (
    <div>
        <input type="text" onChange={(e)=>setColor(e.target.value)}/>
        <button onClick={()=>dispatch(theme(color))}>Change color</button>
    </div>
  )
}

export default ChangeColor