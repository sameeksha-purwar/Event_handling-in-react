import React,{useState} from "react";


function App() {
  const [heading,setHeadingText]=useState(true);
  const [color,setColor]=useState(true)

function change(){
  setHeadingText(false)
}
function onMouseOver(){
    setColor(false)
}
function onMouseOut(){
  setColor(true)
}
  return (
    <div>
    <h1>{heading? "Hello":"Submitted"}</h1>
    <input type="text" placeholder="what's Your Name"/>
    <button style={{background:color? "white":"red"}}
     onClick={change} 
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    >Submit</button>
    
    </div>
  );
}

export default App;
