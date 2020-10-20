import React, {useState, useEffect} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import axios from 'axios'



function App() {
  const[messages, setMessages] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/messages")
    .then(res => {
      setMessages(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [messages])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat messages = {messages}/>
      </div>
    </div>
  );
}

export default App;
