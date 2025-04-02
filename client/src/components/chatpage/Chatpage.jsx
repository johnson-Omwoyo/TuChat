import React, { useEffect } from "react";
import "./ChatNav.css";
import trimText from "./trimText";
import ChatNav from "./ChatNav";
import ChatPrev from "./ChatPrev";
import ChatNames from "./ChatNames";

function Chatpage() {
  useEffect(() => {
    const section = localStorage.getItem("selectedSection") || "chats";
    const setSection = () => {
      console.log(section);

      localStorage.setItem("selectedSection", section);
    };
    setSection();
  }, []);
  return (
    <div className="container-fluid ">
      <div className="row">
        <ChatNav />
        <ChatPrev />
        <ChatNames />
      </div>
    </div>
  );
}

export default Chatpage;
