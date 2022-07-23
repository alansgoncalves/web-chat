import { Box } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box>
        <Tooltip
          label="Search for users to chat"
          hasArrow
          placement="bottom-end"
        >
          <Button variant="ghost">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;
