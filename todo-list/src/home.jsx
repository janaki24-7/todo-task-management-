import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import{BsCircleFill,BsFillTrashFill,BsFillCheckCircleFill} from 'react-icons/bs';
function Home()
{
    const[todos,settodo]=React.useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3002/get")
        .then(res=>settodo(res.data))
        .catch(err=>console.log(err))
    },[])
    const Handlestrike=(id)=>
    {
        axios.put("http://localhost:3002/update/"+id)
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }
    const Handledelete=(id)=>
    {
        axios.delete("http://localhost:3002/delete/"+id)
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }
    return(
    <div className="home">
    <h2>todo list &#58;&#41;</h2>
    <Create/>
     {
        todos.length===0?<div><h2>No records</h2></div>:
        todos.map(todo=>(
            <div className="tasklook">
                <div className="checkbox" onClick={()=>Handlestrike(todo._id)}>
                    {todo.done?<BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>:
                    <BsCircleFill className="icon"/>}
                    <p className={todo.done?"line-through":""}>{todo.task}</p>
                </div>
                <div className="trash">
                    <span><BsFillTrashFill className="icon" onClick={()=>Handledelete(todo._id)}/></span>
                </div>
            </div>
        ))

     }
     </div>
    );
}

export default Home;