import React, { createContext, useState } from "react";
import callLogo from "../assets/call.png"
import textLogo from "../assets/text.png"
import videoLogo from "../assets/video.png"

export const FriendsContext = createContext();
const FriendContext = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
  const data = {
    timeline,
    setTimeline,
    callLogo,
    textLogo,
    videoLogo,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendContext;
