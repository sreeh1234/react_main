// import { useState } from "react"

// function App(){
//   const [count,setCount] = useState(5)

//   return(
//     <>
//     <h1>welcome</h1>
//     <h2>python</h2>
//     <h3>{count}</h3>
//     </>
//   )
// }

// export default App




import { useState } from "react"

function App(){
  const [data,setData] = useState("")
  console.log(data);

  return(
    <>
    <form>
      <input type="text" name="name" id="name" value={data} onChange={(e)=>setData(e.target.value)}/>
    </form>
    <h1>{data}</h1>
    
    </>
  )
}

export default App
