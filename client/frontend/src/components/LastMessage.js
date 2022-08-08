import React from "react";
import { ChatState } from "../Context/ChatProvider";

const LastMessage = () => {
  const { chats } = ChatState();

  return (
    <div>
      {chats
        ? chats.map((chat) => (
            <div key={chat._id}>
              {chat.latestMessage && (
                <div fontSize="xs">
                  <b>{chat.latestMessage.sender.name} : </b>
                  {chat.latestMessage.content.length > 50
                    ? chat.latestMessage.content.substring(0, 51) + "..."
                    : chat.latestMessage.content}
                </div>
              )}
            </div>
          ))
        : "failed"}
    </div>
  );
};

export default LastMessage;
