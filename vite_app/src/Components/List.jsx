import { useEffect, useState } from "react"
import axios from 'axios'
import Add from './Add'

function List(){
    const [data,setData] = useState([])
    const [editing,setEditing] = useState(false)
    const [editData,setEditData] = useState(null)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todo/').then((res)=>{
            console.log(res.data)
            setData(res.data)
        }).catch(error=>console.log(error.message))
    },[])

    const EditingFun = (task)=>{
        setEditing(true)
        setEditData(task)
    }

    const updateFun = (id,task)=>{
        setEditing(false)
        axios.put(`http://127.0.0.1:8000/api/todo/${id}/`,task).then((res)=>{
            setData(data.map((tasks)=>(id===tasks ? res.data : tasks)))
        }).catch(error=>console.log(error.message))
    }

    const deletefun = (id)=>{
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`).then((res)=>{
            setData(data.filter((task)=>task.id!==id))
        }).catch(error=>console.log(error.message))
    }
    
    return(
        <div className="container">
            <h1>Display</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.task}</td>
                            <td>{value.description}</td>
                            <td><button className="btn btn-outline-info" onClick={()=>{EditingFun(value)}}>Edit</button></td>
                            <td><button className="btn btn-outline-danger" onClick={()=>{deletefun(value.id)}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            { editing ? <EditForm curTask={editData} updateFunction={updateFun} />:<Add/>}
        </div>
    )
}
const EditForm = ({curTask,updateFunction})=>{
    const [task,setTask] = useState(curTask)

    const handleChange = (e)=>{
        const {name,value}=e.target 
        setTask({...task,[name]:value})
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        updateFunction(task.id,task)
    }

    return(
        <form onSubmit={handleSubmit}> 
            <input type="text" name="task" id="task" value={task.task} onChange={handleChange} />
            <input type="text" name="description" id="description" value={task.description} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}


export default List