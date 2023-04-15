import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import { useSelector } from "react-redux";
//import { selectUser } from "./features/userSlice";

function Sidebar() {
  //const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  // useEffect(() => {
  //   db.collection("channels").onSnapshot((snapshot) =>
  //     setChannels(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         channel: doc.data(),
  //       }))
  //     )
  //   );
  // }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    // if (channelName) {
    //   db.collection("channels").add({
    //     channelName: channelName,
    //   });
    // }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>My First Channel</h3>
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <h4>Other Channels Here</h4>
          </div>
        </div>

        <div onClick={handleAddChannel} className="sidebar__addChannel">
          <h4>Add Channel</h4>
        </div>

        {/* <div className="sidebar__channelsList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div> */}
      </div>

      <div className="sidebar__profile">
        {/* <Avatar onClick={() => auth.signOut()} src={user.photo} /> */}
        <div className="sidebar__profileInfo">
          <h3>UserName Placeholder</h3>
          {/* <h3>{user.displayName}</h3> */}
          {/* <p>#{user.uid.substring(0, 4)}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;