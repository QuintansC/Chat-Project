import { useState, useEffect } from 'react';
import './index.css';
import { io } from "socket.io-client";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages] = useState<string[]>([]);
  const socket = io('http://localhost:3333/').connect();

  const [key, setKey] = useState(0);
  const send = () => {
    messages.push(inputMessage);
    socket.emit('message', inputMessage);
  }

  useEffect(()=>{
    socket.on('message', ()=>setKey(key+1));
  })

  const handleChangeMessage = (e: any) => { 
    setInputMessage(e.target.value)
  }

  return (
    <>
      <ul id="messages" key={key}>
        {messages.map(message => <li>{message}</li> )}
      </ul>
      <form id="form" action="">
        <input id="input" autoComplete="off" value={inputMessage} onChange={handleChangeMessage} />
        <button type="button" onClick={send}>Send</button>
      </form>
    </>
  )
}

export default App
