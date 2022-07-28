import React, { createContext, useContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [chats, setChats] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if (!userInfo) {
      <Redirect
        to={{
          pathname: "/",
          state: { from: history },
        }}
      />;
    }
  }, [history]);

  return (
    <ChatContext.Provider
      value={{ selectedChat, setSelectedChat, user, setUser, chats, setChats }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
