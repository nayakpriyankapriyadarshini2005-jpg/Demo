export default function CustomButton({value, clickme}) {
    return (
        <button style = {{backgroundColor:"red", color:"greenyellow",border:"2px solid black"}}
        // value={value}
        // onClick={onClick}
        onClick={clickme}
        > 
        {value}    
         </button>
    )
}