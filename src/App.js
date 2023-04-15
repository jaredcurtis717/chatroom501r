import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar.js";
import useWebSocket from 'react-use-websocket';
const WS_URL = 'wss://a5dx6pj25c.execute-api.us-west-2.amazonaws.com/production';

function App() {
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("connection established");
    }
  });

  return (
    <div className="app">
          <Sidebar />
          <Chat />
    </div>
  );
}

export default App;