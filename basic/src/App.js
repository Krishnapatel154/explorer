import './App.css';
import{useState}from 'react'
function App() {

  const [value,setvalue]=useState('everyone')

  function msg()
  {
    setvalue('good morning')
  }
  return (
    <div className="App">
       <h1>hello  ,{value} </h1>
       <button onClick={msg}>click me</button>
    </div>
  );
}

export default App;
