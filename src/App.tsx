import React from 'react';
import {UserInfo} from "./components/UserInfo/UserInfo";
import {ChatList} from "./components/ChatList/ChatList";
import './App.css';
import {Chat} from "./components/Chat/Chat";

function App() {
  return (
    <div className='main-container'>
      <div className='left-side-container'>
        <UserInfo/>
        <ChatList/>
      </div>
      <div className='right-side-container'>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
