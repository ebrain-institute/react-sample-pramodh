
import React, {useEffect, useState } from "react";

export default function List({getItems}: any){
    const [items, setItems] = useState([]);

    useEffect(()=>{

            setItems(getItems());
            console.log('Updating Items');

    }, [getItems]);

    return items.map(item => <div key={item}>  {item}</div>)
}