import React, { useState, useEffect } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import useWebSocket from "react-use-websocket";

const WS_URL =
  "wss://a5dx6pj25c.execute-api.us-west-2.amazonaws.com/production";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const { sendJsonMessage, lastMessage } = useWebSocket(WS_URL);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      sendJsonMessage({ action: "sendMessage", data: input });
      setInput("");
      console.log(messages);
    }
  };

  useEffect(() => {
    if (lastMessage?.data) {
      setMessages((prevMessages) => [...prevMessages, lastMessage.data]);
    }
  }, [lastMessage]);

  return (
    <div className="chat">
      <div className="chat__messages">
        {messages.map((message) => (
          <Message message={message} />
        ))}
      </div>
      <div className="chat__input">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here"
          />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons"></div>
      </div>
    </div>
  );
}

export default Chat;
