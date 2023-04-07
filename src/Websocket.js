import React from "react";
import useWebSocket from "react-use-websocket";
const WS_URL =
  "wss://a5dx6pj25c.execute-api.us-west-2.amazonaws.com/production";

export default function Websocket() {
  // useWebSocket(WS_URL, {
  //   onOpen: () => {
  //     console.log("WebSocket connection established");
  //   },
  // }),
    (sendMessage = (e) => {
      e.preventDefault();
      sendJsonMessage({
        action: "sendMessage",
        data: "hello world",
      });
    });

  return <div>websocket</div>;
}

