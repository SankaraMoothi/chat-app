import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const handleLogout = (e) => {
    signOut(e);
    window.location.reload();
  };
  return (
    <div className="navbar">
      <span className="logo">mass chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => handleLogout(auth)}>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
