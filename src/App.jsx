import { useState } from 'react'
import './App.css'
import ToDolists from './ToDolists';

function App() {
  const [inputlist, setinputList] = useState();
  const [Items,setItems]=useState([]);
  const itemevent=(event)=>{
    setinputList(event.target.value);
  };
  const listofItems=()=>{
     setItems((oldItems)=>{
      return [...oldItems,inputlist]
     })
     setinputList("");
  }
  const deleteItem=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      });
    });
  };
  return (
    <>
     <div className="maincontainer">
      <div className="centerdiv">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder='Add To List'
        value={inputlist}
        onChange={itemevent}/>
        <button onClick={listofItems}> + </button>
        <ol>
    {Items.map((itemVal,index)=>{
      return <ToDolists 
      key={index}
      id={index}
      text={itemVal}
      onSelect={deleteItem}></ToDolists>
    })}
        </ol>
      </div>
      </div>   
    </>
  )
}

export default App
