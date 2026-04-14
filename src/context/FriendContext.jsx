import React, { createContext, useState } from "react";
import callLogo from "../assets/call.png"

export const FriendsContext = createContext();
const FriendContext = ({ children }) => {
    const [callStatus, setCallStatus] = useState([]);
  const data = {
    callStatus,
    setCallStatus,
    callLogo
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendContext;
