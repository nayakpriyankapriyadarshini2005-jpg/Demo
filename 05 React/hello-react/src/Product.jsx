// export default function Product(props){
//     console.log("...", props)
    // const name =props.name
    // const price = props.price
    // const{name, price} = props

    export default function Product({name, price, ...others}){
        return (
        <>
             <h3>Name: -{name} </h3> 
             <p>Price: -{price}</p> 
             <p>{others.description ? `description:- ${others.description}`:''}</p>
             <p>{others.brand ? `brand:-${others.brand}`:''}</p>
        </>
    )
}

    {/* // return (
    //     <>
    //         { <h3>Name: -{name} </h3> }
    //         { <p>Price: -{price}</p> }
    //     </>
        // <>
        //    <h3>Campus Shoes -{name} </h3>
        //    <p>344.78 -{price}</p>
        // </>
//     )
// }
// console.log("///", Product())

// export default Product
// console.log("jjdhfnjf") */}