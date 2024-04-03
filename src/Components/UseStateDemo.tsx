import { useRef, useState } from "react";

function UseStateDemo (){

    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    // console.log(count)

const handleIncrement = ()=>{
        
        setCount(count + 1);
        countRef.current++; 
        
        // console.log('State:', count);
        // console.log('Ref:', countRef.current);

}


    return(
        <> 
            <h1> Count: {count}</h1>
            <button onClick={handleIncrement}>Increement</button>
            {/* <button onClick={()=>setCount(count - 1)}>Decreement</button> */}
        </>
    )


}

export default UseStateDemo;