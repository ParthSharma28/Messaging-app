// import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import axios from './components/axios'
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {

  const [messages, setMessages] = useState([])
  const [{ user }, dispatch] = useStateValue()
  // const [user, setUser] = useState(null)
  useEffect(() => {
    axios.get("/messages/sync").then(res => {
    setMessages(res.data); console.log("chlllllllllla");
    })
    }, [])
 useEffect(() => {
 const pusher = new Pusher(process.env.key, {
 cluster: 'ap2'
 });
 const channel = pusher.subscribe('test');
 console.log("pusher");
 channel.bind('inserted', (data) => {
 setMessages([...messages, data]); console.log("under");
 });
 return () => {
  console.log("return");
 channel.unbind_all()
 channel.unsubscribe()
 }
 }, [messages])
//  console.log(messages)
  return (
    <div className="app">
    { !user ? <Login user={user} /> : (
      <div className="app__body">
      <Sidebar messages={messages} />
      <Chat  messages={messages} />
 </div>
    )}
    </div>
  );
}

export default App;
