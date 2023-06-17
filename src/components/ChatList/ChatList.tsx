import './ChatList.css';
import {DisplayInfo} from "../DisplayInfo/DisplayInfo";
import {Chat} from "../../mocks/chat-list";
import {useContext, useEffect} from "react";
import {ChatContext} from "../../context/chat";
import {HandleUserKeyPress} from "../../utils/hooks/handleUserKeyPress";

export const ChatList = () => {
  const { chatList, selectChat, currentChatId } = useContext(ChatContext);
  const key = HandleUserKeyPress();

  useEffect(() => {
    if (key === 27) {
      selectChat(null)
    }
  }, [key])

  return (
    <div className='chat-list-container'>
      {chatList.map((chat: Chat) => {
        return (
          <div className={`chat-list-item ${currentChatId === chat.id ? 'active': ''}`} onClick={() => selectChat(chat.id)} key={chat.id}>
            <DisplayInfo imgSrc={chat.logo} imgAlt={`${chat.name} chat`} name={chat.name}/>
          </div>
        )
      })}
    </div>
  )
}
