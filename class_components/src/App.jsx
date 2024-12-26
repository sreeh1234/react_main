import { Component } from "react";

class App extends Component{
  constructor(props){
    super()
    // console.log(props)
    this.state = {
      count : props.start || 0
      // data : "react class component",
      // a : props.a,
      // b : props.b,
    }
  }
  increment = ()=>{
    this.setState((prev)=>({count:prev.count+1}))
  }
  // decrement = ()=>{
  //   this.setState((prev)=>{
  //     if(prev.count>0){
  //       return {count:prev.count-1}
  //     }
  //     return 0
  //   })
  // }

  decrement = ()=>{
    this.setState((prev)=>({count:prev.count>0 ? prev.count-1 : 0}))}

  render(){
    return(
      <div>
        {/* <h1>{this.state.data}</h1> */}
        {/* <h2>{this.props.a}</h2>
        <h3>{this.props.b}</h3> */}
        {/* <h1>{this.state.a}</h1>
         <h1>{this.state.b}</h1> */}
        <button onClick={this.increment}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default App