
import './App.css'
import CustomButton from './CustomButton';

function App() {
  // const handleClick = () =>{
  //   console.log("paragraph clicked");
    
  // }
  // const handleClick = (e) =>{
  //   console.log("paragraph clicked",e);
  // const handleClick = (e, name) =>{
  //   console.log("paragraph clicked",e, name);
    
  // }
  // const DoubleClick = () =>{
  //   console.log("paragraph clicked");
    
  // }

  function handleChange(e){
    // console.log("input chage:-",  e.target.value);
    // console.log("input chage:-",  e.target.name, "->", e.target.value);
    const {name, value} = e.target;
    // console.log(`input change:- ${name} -> ${value}`);
    console.log("input change detected:-", name, "->",value);
    
  }
  return (
    <>
     {/* <p onClick={console.log("p clicked")
     }>click here..</p>  */}
     {/* <p onClick={(e) => console.log("p clicked", e)}
     >click here..</p>  */}

     {/* <p onClick={handleClick()}
     >click here..</p> */}

     {/* <p onClick={handleClick}
     >click here..</p>
     <p onDoubleClick={handleClick}
     > Double click here..</p> */}

    {/* <p onClick={(e) =>{ handleClick(e, "React")}}>Click me</p> */}
    <input type="text" name='username' onChange={handleChange}></input>      
    <input type="text" name='email' onChange={handleChange}></input>      
        
          
       {/* <CustomButton value={"Click me"} onClick={() => console.log("custom button clicked")
       } />        */}
       <CustomButton value={"Click me"} clickme={() => console.log("custom button clicked")
       } />       
    </>
  )
}

export default App
