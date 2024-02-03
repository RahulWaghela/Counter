import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [first, setfirst] = useState(1);
  const increase=()=>{
      setfirst(first+1);
  }
  const decrease=()=>{
     if(first>=1){
       setfirst(first-1);
     }
  }
  return (
    <>
    <h1>increase the value {first}</h1> 
    <button onClick={decrease}>click to decrease</button> <button onClick={increase}>click to increase</button>  


     <p>this is the sidebar{first}</p>
     <p>this is the navbar{first}</p>
     <p>this is the footer{first}</p>
    </>
  );
}

export default App;
