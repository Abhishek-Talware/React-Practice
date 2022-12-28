import React ,{useState,useEffect} from 'react'

const UseEffect = () => {

  const[val,setVal]=useState(0)
    const inc=(val)=>{
        setVal(val+1)
    }
    const dec=(val)=>{
        setVal(val-1)
    }
    const reset=()=>{
        setVal(0)
    }
    useEffect(()=>{
        if(val>=1)
        document.title=`New Messages ${val}`
        else
        document.title="New Messages 0"
    },[])
  return (
    <div>
        <h1>{val}</h1>
        <button onClick={()=>inc(val)}>Increase</button>
        <button onClick={()=>dec(val)}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseEffect