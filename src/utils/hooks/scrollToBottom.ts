import {useRef} from "react";

export const ScrollToBottom = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return { messagesEndRef, scrollToBottom }
}
