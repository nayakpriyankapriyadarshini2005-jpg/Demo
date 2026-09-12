//import React, { Fragment } from 'react'
import './App.css'
//import P from './Compo';
import Product from './Product';
import products from './products';
function App() {
  const a = 10
  const b = 20

  return (
    // <div>
    //   <h1>
    //     Hello React
    //   </h1>
    //   <h2>
    //     Mentor: Sai Pranab Patra
    //   </h2>
    // </div>

    // <React.Fragment>
    //   <h1>
    //     Hello React
    //   </h1>
    //   <h2>
    //     Mentor: Sai Pranab Patra
    //   </h2>
    // </React.Fragment>

    // <Fragment>
    //   <h1>
    //     Hello React
    //   </h1>
    //   <h2>
    //     Mentor: Sai Pranab Patra
    //   </h2>
    // </Fragment>

    <>
      <h1 style={{backgroundColor: 'red', color:'yellow'}}>
        Hello React
      </h1>
      <h2 style = {{backgroundColor: 'yellow', color:'green'}}>
        Mentor: priyanka p nayak
      </h2>

      <p>a is : {a}</p>
      <p>b is : {b}</p>
      <p>a + b is : { a + b }</p>

      {/* {p() }
      <p> </p> */}
      {/* <P/> */}

    

      {/* <Product name ="earing" price="300567" description = "this is a earing" brand="YSL"/>
      <Product name ="mobile" price="40003" brand ="realMe" description="this is realMe 10 pro 5g"/> */}
{products.map((p) => (
        // {/* <Product name={product.name} price={product.price} brand={product.brand} description={product.description}/> */}
     <Product name={p.name} price={p.price} brand={p.brand} description={p.description}/>
     ))}

    </>
  )
}

export default App