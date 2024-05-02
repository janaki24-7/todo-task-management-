import React from 'react'
import axios from 'axios'
function Create()
{
    const [task,setask]=React.useState()
    function Handle()
    {
        axios.post("http://localhost:3002/add",{task:task})
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }
    return (
    <div className="create">
        <input type="text" placeholder="enter your task" onChange={(e)=>setask(e.target.value)}/>
        <button type="button" onClick={Handle}>Add</button>
    </div>
   )
}
export default Create;