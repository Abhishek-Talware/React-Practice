import React,{useState,useEffect} from 'react'

const ToDoList = () => {

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[people,setPeople]=([])

    const Sub=(e)=>{
        e.preventDefault();
        if(name  && email)
        {
            const person={naam:{name},mail:{email}}
            console.log(person)
             console.log("Hi")
            setPeople([...people,person])
            setName(" ");
            setEmail(" ")
            
        }
    }
  return (
    <div>
        <form action="">
           
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="naam" id="name" value={name} 
                onChange={(e)=>{setName(e.target.value)}}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
               <input type="text" name="mail" id="email" value={email}
               onChange={(e)=>{setEmail(e.target.value)}}
               />
            </div>
            <button type="submit" onClick={(e)=>Sub}>Submit</button>
        </form>
        
            {/* {people.map((person)=>{ */}
                {/* // const{naam,mail}=person;
                // return
                // <>
                // <h3>{naam}</h3>
                // <h4>{mail}</h4>
                
                // </> */}
               
            


            
            {/* })} */}
        
    </div>
  )
}

export default ToDoList