import { useState, useEffect } from 'react' 
import './App.css';
import axios from 'axios'
import Sipner from './Sipner';

function App() {

  const [msg, setMsg] = useState('')

  //const url = 'https://first-test-april25-2022.herokuapp.com/about'

  const fetchdata = async () =>{

      console.log("I'm working")

      try {
        const response = await axios.get('https://first-test-april25-2022.herokuapp.com/about');
        console.log(response.data);
        setMsg(response.data)
      } catch (error) {
        console.error(error);
      }

  }

  useEffect(()=>{

     fetchdata()

  },[])



  return (
    <div className="App">
            {msg? <h1>{msg.message}</h1>: <Sipner/>}
            
    </div>
  );
}

export default App;
