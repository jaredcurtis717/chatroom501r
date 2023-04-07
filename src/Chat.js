import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import io from "socket.io-client";

function Chat() {
   const socket = io("wss://a5dx6pj25c.execute-api.us-west-2.amazonaws.com/production");
  // const user = useSelector(selectUser);
  // const channelId = useSelector(selectChannelId);
  // const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  // const [messages, setMessages] = useState([]);


  useEffect(() => {
    // handle incoming messages
    socket.on("message", (data) => {
      console.log("Received message:", data);
    });

    // handle disconnection
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    // handle errors
    socket.on("error", (error) => {
      console.error("WebSocket error:", error);
    });

    return () => {
      socket.disconnect(); // disconnect when component unmounts
    };
  }, [socket]);

  const sendMessage = (message) => {
    socket.send(message);
  };

  return (
    <div className="chat">
      {/* <ChatHeader channelName={channelName} /> */}

      <div className="chat__messages">
        {/* {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))} */}
      </div>

      <div className="chat__input">
        <form>
          <input
           value={input}
          // disabled={!channelId}
           onChange={(e) => setInput(e.target.value)}
          // placeholder={`Message #${channelName}`}
          />
          <button
            // disabled={!channelId}
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons"></div>
      </div>
    </div>
  );
}

export default Chat;
