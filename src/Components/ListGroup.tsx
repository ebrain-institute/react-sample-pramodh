import { useState } from "react";

interface Props {
    items:string[],
    heading:string
    handleClick:(item:string)=> void,
}


function ListGroup({items, heading, handleClick} : Props){

  const [selectedIndex, setSelectedIndex] = useState(-1);

return(

    <>
    <h1> {heading}</h1>
    <ul className="list-group">
        {items && items.map((item ,index)=>(

        <li 
            className={
                selectedIndex === index ? 'list-group-item active' : 'list-group-item'
            }
            key={index} 
            onClick={()=>handleClick(item)}> 
            {item} 
        </li>
        ))

        }
        {/* {
            items ? items.map((item ,index)=>(

                <li 
                    className={
                        selectedIndex === index ? 'list-group-item active' : 'list-group-item'
                    }
                    key={index} 
                    onClick={()=>setSelectedIndex(index)}> 
                    {item} 
                </li>
                )) : <p> s</p>
        } */}
    </ul>
  </>
)

}

export default ListGroup;