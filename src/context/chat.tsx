import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {Chat, CHAT_LIST} from "../mocks/chat-list";

const useValue = () => {
  const [chatList, setChatList] = useState(CHAT_LIST);
  const [currentChat, setCurrentChat] = useState<null|Chat>(null);
  const [currentChatId, setCurrentChatId] = useState<null|number>(null);

  const selectChat = (id: number | null) => {
    const chat = id !== currentChat?.id ? chatList.find((chatItem) => chatItem.id === id) || null : null;
    setCurrentChat(chat)
    setCurrentChatId(chat?.id || null)
  }

  const sendMessage = (newMessage: string, currentUser: number, currentUserName: string) => {
    if (currentChat) {
      const message = {
        id: currentChat.messages[currentChat.messages.length - 1].id + 1,
        fromUserId: currentUser,
        fromUserName: currentUserName,
        message: newMessage
      }
      setChatList(chatList.map((chat) => {
        if (chat.id === currentChatId) {
          chat.messages = [...chat.messages, message]
        }
        return chat;
      }))
    }
  }

  const updateChatWithName = (currentUserId: number, newUserName: string) => {
    setChatList(chatList.map((chat) => {
      chat.messages = chat.messages.map((message) => {
        if (message.fromUserId === currentUserId) {
          message.fromUserName = newUserName;
        }
        return message;
      })
      return chat;
    }))
  }

  return { chatList, selectChat, currentChat, currentChatId, sendMessage, updateChatWithName };
}

export const ChatContext = createContext({} as ReturnType<typeof useValue>);

export const ChatProvider = ({ children }: PropsWithChildren) => {
  return <ChatContext.Provider value={useValue()}>{children}</ChatContext.Provider>;
};
