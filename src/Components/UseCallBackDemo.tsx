import React, {useState, useCallback} from "react";
import List from './List';


export default function UseCallBackDemo(){
    const [number, setNumber] =useState(1);;
    const [dark, setDark] = useState(false);

    const theme = {
            backgroundColor: dark ? '#333' : '#FFF',
            color: dark ? '#FFF': '#3333'
    }
    const getItems = useCallback (()=>{
        return [number, number + 1, number + 2]
    }, [number])


    return(

            <div style={theme}>

                    <input 
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(parseInt(e.target.value))}
                    />

                    <button onClick={()=>{setDark(prevDark => !prevDark)}}> Toggle theme</button>
                    <List getItems = {getItems} />

            </div>

    )




}