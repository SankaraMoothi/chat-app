import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
