import React from 'react';
import './App.css';
import Hello from './hello';
import './index.css'

function App({name,age}) {
const [isLit, setLit] = React.useState(true);
return <div className={`room ${isLit ? "lit" : "dark"}`}> Hello  <strong>{name} </strong> 
<br/>
<ul>
<li>Your Name is : {name}</li>
<li>Your age is : {age}</li>
<li>You are computer scientist</li>
</ul>
 <Hello firstName={name}/>
 <button onClick={() => setLit(!isLit)}>
    flip
  </button> <br/>
 
 </div>
}

export default App;
