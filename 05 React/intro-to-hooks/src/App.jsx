import {useState} from 'react'
//import './App.css'

function App() {
// console.log("app componet");

  //let count  = 0;  //normal js whoose value not show updated in hooks in re-render
  // const state = useState(0) //useState is a hook which return(state) an array of 2 values
  const state = useState(12) //useState is a hook which return(state) an array of 2 values
// console.log("/////",state);
// console.log("/////",state[0]);
// console.log("/////",state[1]);

const [count, setCount] = state;
console.log("app component",count);


  function increment(){
   //count++ ;
   //  console.log("increment clicked",count);
  //  state[0] 
    //state[0]++
   // state[1](state[0]++)  //state[1] is a function which update the state value and re-render the component
   //  console.log("increment state",state);

  // state[1](state[0]+1)  //state[1] is a function which update the state value and re-render the component
  setCount(count + 1);  //setCount is a function which update the state value and re-render the component
   console.log("increment state",count);
  }



  function increase(){
    setCount(count+2);  //setCount is a function which update the state value and re-render the component
    console.log("increase state",count);
  }
const decrease = () => {
  setCount(count == 0 ? 0: count-1);
  //if the state is reassigned with the same value then the component won't be re-render
  //eg: if the state value is 0 and we try to reasign 0 again then the comonent won't be
  //due to react intelligence. On the other hnd if we assign any other value insted 
  // of 0 react will re-render the component
}
  return (
    <>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Counter App</h1>
      <br /> <br />

      <button onClick={increase}>Increase by 2 </button>
        <br /><br />
      <button onClick={increment}>Increase</button>
      <br /> <br/>
      <button>{count}</button>
      <br /> <br/>
      <button onClick={decrease}>Decrease</button>
    </div>
    </>
  )
}

export default App
