import React,{ useState } from 'react'
import {data} from "./data.js"
const UseState = () => {

   //usestate return array..
//    const[text,setText]=useState("heo")
//    const change=()=>{
//     if(text=="heo")
//         setText("changed title")
//     else
//         setText("heo")
//    }
const clear=()=>{
    setPeople([])
}
const reset=()=>{
    setPeople(data)
}
const clearItem=(id)=>{
    let newPeople=people.filter((person)=>
        person.id!=id)
    setPeople(newPeople)
}
    const[people,setPeople]=useState(data)
  return (
    <div>
        {/* <h1>{text}</h1>
        <button onClick={change}>
            Change Title
        </button> */}
        {people.map((person)=>{
            const{id,name}=person;
            return(
                <div key={id}>
                <h4>{name}</h4>
                <button onClick={()=>clearItem(id)}>Clear item</button>
                </div>
            )
        })}
        <button onClick={clear}>Clear items</button>
        <button onClick={reset}>reset items</button>
    </div>
  )
}

export default UseState