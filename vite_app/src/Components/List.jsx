import { useEffect, useState } from "react"
import axios from 'axios'

function List(){
    const [data,setDate] = useState([])
    const [editing,setEditing] = useState(false)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todo/').then((res)=>{
            console.log(res.data)
            setDate(res.data)
        }).catch(error=>console.log(error.message))
    },[])

    const EditingFun = (task)=>{
        setEditing(true)
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
                            <td><button className="btn btn-outline-danger" onClick={()=>{}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            { editing ? <EditForm/>:null}
        </div>
    )
}
const EditForm = ()=>{
    return(
        <form> 
            <input type="text" name="task" id="task" />
            <input type="text" name="description" id="description" />
            <input type="submit" />
        </form>
    )
}


export default List