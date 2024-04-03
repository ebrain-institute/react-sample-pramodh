import { useState, useEffect } from "react";



function UseStateDemo (){
    const [count, setCount] = useState(0);

    useEffect(()=>{
            // The code that we want to run
            console.log('The count is:',  count)

            //Optional return function 
            // return() =>{

            // }

    }, [count]); // Dependency array



    return(
        <> 
            <h1> Count: {count}</h1>
            <button onClick={()=>setCount(count + 1)}>Increement</button>
            <button onClick={()=>setCount(count - 1)}>Decreement</button>
        </>
    )


}

export default UseStateDemo;