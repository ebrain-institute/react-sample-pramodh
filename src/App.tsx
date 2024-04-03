
import ListGroup from './Components/ListGroup';
import Alert from './Components/Alert';
import Button from './Components/Button';
import { useState } from 'react';
import UseStateDemo from './Components/UseStateDemo';
import UseEffectDemo from './Components/UseEffectDemo'
import UseMemo from './Components/UseMemo'
import UseCallBackDemo from'./Components/UseCallBackDemo';
import {DashBoardContext} from './Components/DashBoardContext';

function App() {
  // const items = ['Green', 'Red', 'Blue', 'Yellow', 'Balck']; 
  // const handleClick = (item:string)=>{

  //   console.log(item)
  // }
  // const [alertVisable, setAlertVisibility] = useState(false);
  return (
  // <>
  // {alertVisable &&     
  // <Alert onColse={()=>setAlertVisibility(false)}>
  //     <span> Hello</span>
  //   </Alert>
  //   }
    
  //   <Button onClick={()=>setAlertVisibility(true)}>
  //       Button
  //   </Button>


    // {/* <ListGroup items= {items} heading="Hello world" handleClick={handleClick}/> */}
    <>
      {/* <UseStateDemo/> */}
      {/* <UseEffectDemo/> */}
      {/* <UseMemo/> */}
      {/* <UseCallBackDemo /> */}
      <div>
         {/* <DashBoardContext.Provider> */}

         <UseCallBackDemo/>
         <UseMemo/>

         {/* </DashBoardContext.Provider> */}
      </div>
    </>
  )
}

export default App
