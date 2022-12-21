import React, { useContext } from "react";
import cam from "../img/cam.png";
import addFrnd from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Context/ChatContext";

function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcon">
          <img src={cam} alt="camerIcon" />
          <img src={addFrnd} alt="AddFrndIcon" />
          <img src={More} alt="ThreedoutIcon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
