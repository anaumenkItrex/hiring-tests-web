import {DisplayInfo} from "../DisplayInfo/DisplayInfo";
import {ChangeEvent, useContext, useEffect, useRef, useState} from "react";
import {ChatContext} from "../../context/chat";
import {UserContext} from "../../context/user";
import './Chat.css';
import {ScrollToBottom} from "../../utils/hooks/scrollToBottom";
import {HandleUserKeyPress} from "../../utils/hooks/handleUserKeyPress";

export const Chat = () => {
  const {currentChat, sendMessage} = useContext(ChatContext);
  const {userId, userName} = useContext(UserContext);
  const [newMessage, setNewMessage] = useState('');
  const {messagesEndRef, scrollToBottom} = ScrollToBottom();
  const key = HandleUserKeyPress()
  const messageInputRef = useRef<HTMLInputElement>(null)

  const handleMessageInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.currentTarget.value);
  }

  const onSendButtonClick = () => {
    if (newMessage !== '') {
      setNewMessage('');
      sendMessage(newMessage, userId, userName)
    }
  }

  useEffect(() => {
    if (key === 13 && document.activeElement === messageInputRef.current) { // 13 = enter
      onSendButtonClick();
    }
  }, [key]);

  useEffect(() => {
    scrollToBottom()
  }, [newMessage]);

  return currentChat ? (
    <div className='chat-container'>
      <DisplayInfo
        imgSrc={currentChat?.logo}
        imgAlt={`${currentChat.name} chat`}
        name={currentChat.name}
        underline={true}
      />
      <div className='chat-messages-container'>
        {currentChat.messages.map((message) => {
          return (
            <div key={message.id} className={`chat-messages-item ${userId === message.fromUserId ? 'right': 'left'}`}>
              {message.fromUserName}: {message.message}
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className='send-field-container'>
        <input
          className='send-field-input'
          placeholder='Enter your message here, please'
          value={newMessage}
          onInput={handleMessageInput}
          ref={messageInputRef}
        />
        <button className='send-field-button' onClick={onSendButtonClick}>SEND</button>
      </div>
    </div>
  ): null;
}
