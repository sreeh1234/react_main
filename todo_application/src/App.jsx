import { useState } from "react"

function App(){
  const [data,setData] = useState([])
  const [formData,setFormData] = useState({name:"",age:""})
  // console.log(data);


  const handleChange = (e) => {
    const { name,value } = e.target 
    setFormData((prv)=>({...prv,[name]:value}))
    // console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData((prv)=>[...prv,formData])
    setFormData({name:"",age:""})
    // console.log(data);
  }
  return(
  <>
  <form onSubmit={handleSubmit}>
    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>
    <input type="number" name="age" id="age" value={formData.age} onChange={handleChange}/>
    <input type="submit" value="add" />
  </form>
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    {data.map((value,index)=>(
      <tr key={index}>
        <td>{value.name}</td>
        <td>{value.age}</td>
      </tr>
    ))}
  </table>
  </>
  )
}

export default App
