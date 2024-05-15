import React from "react";
import'./App.css'
const ToDolists=(props)=>{
   
 return(
    <>
    <div className="todo_style">
    <div className="times"onClick={()=>{
      props.onSelect(props.id);
    }}>X</div>
    <li>{props.text}</li>
    </div>
    </>
 )
}

export default ToDolists;