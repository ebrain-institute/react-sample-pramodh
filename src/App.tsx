
import ListGroup from './Components/ListGroup';
import Alert from './Components/Alert';
import Button from './Components/Button';
import { useState } from 'react';

function App() {
  const items = ['Green', 'Red', 'Blue', 'Yellow', 'Balck']; 
  const handleClick = (item:string)=>{

    console.log(item)
  }
  const [alertVisable, setAlertVisibility] = useState(false);
  return (
  <>
  {alertVisable &&     
  <Alert onColse={()=>setAlertVisibility(false)}>
      <span> Hello</span>
    </Alert>
    }
    
    <Button onClick={()=>setAlertVisibility(true)}>
        Button
    </Button>


    {/* <ListGroup items= {items} heading="Hello world" handleClick={handleClick}/> */}
  </>
  )
}

export default App
