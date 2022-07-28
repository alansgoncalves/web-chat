import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelecteChat } = ChatState;

  return (
    <>
      {selectedChat ? (
        <Text></Text>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
