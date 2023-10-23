import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from './components/ListGroup';
import ButtonP from './components/ButtonP';
// const [phar, setphar] = useState("text text text text text text text text text text text");
// const [bool, setbool] = useState(true);
function App() {
  
    
    
  return (
    <>
      <h1>Home work 2</h1>
      <h2>part 1</h2>
      <ListGroup name="citties in Jordan" map1={["Amman","Karak","Aqba"]}/>
      <ListGroup name="fruits" map1={["Apple","Banana","Strawberry"]}/>
      <hr />
      <h2>part 2</h2>
      <ButtonP/>
      
    </>
  )
}

export default App
