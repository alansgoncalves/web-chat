import React from "react";
import ScrollabelFeed from "react-scrollable-feed";

const ScrollableChat = ({ messages }) => {
  return (
    <ScrollabelFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}></div>
          // {isSameSender}
          // {isLastMessage}
        ))}
    </ScrollabelFeed>
  );
};

export default ScrollableChat;
