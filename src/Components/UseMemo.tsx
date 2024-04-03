import { useState, useMemo } from "react";

import {innitialItems } from './../utils/utils'

interface DemoProps {};

function UseMemo({}: DemoProps){

    const [count, setCount] = useState(0);
    const [items] = useState(innitialItems);

    const selectedItems = useMemo (
        ()=>items.find(item=>item.isSelected), 
        [items])

    return(
        <> 
            <h1> Count: {count}</h1>
            <h2> Selected item: {selectedItems?.id} </h2>
            <button onClick={()=>setCount(count + 1)}>Increement</button>
        </>
    )
}

export default UseMemo;