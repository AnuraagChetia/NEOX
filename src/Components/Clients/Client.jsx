import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import brandLogo1 from "../../Assets/1.png";
import brandLogo2 from "../../Assets/2.png";
import brandLogo3 from "../../Assets/3.png";
import brandLogo4 from "../../Assets/4.png";
import "./client.css";
const Client = () => {
  return (
    <Flex
      className="brandLogos"
      overflowX="auto"
      width="100%"
      py="4"
      px="2"
      gap="10"
    >
      {/* Individual brand logos */}
      <Center
        w={{ base: "", md: "100%" }}
        mt={{ base: 0, "2xl": 60 }}
        gap={{ base: 10, xl: 40 }}
      >
        <Box
          flexShrink={0}
          boxSize="150px"
          mx="2"
          display="flex"
          justifyContent="center"
        >
          <img src={brandLogo1} alt="Logo 1" style={{ objectFit: "contain" }} />
        </Box>
        <Box
          flexShrink={0}
          boxSize="150px"
          mx="2"
          display="flex"
          justifyContent="center"
        >
          <img src={brandLogo2} alt="Logo 1" style={{ objectFit: "contain" }} />
        </Box>
        <Box
          flexShrink={0}
          boxSize="150px"
          mx="2"
          display="flex"
          justifyContent="center"
        >
          <img src={brandLogo3} alt="Logo 1" style={{ objectFit: "contain" }} />
        </Box>
        <Box
          flexShrink={0}
          boxSize="150px"
          mx="2"
          display="flex"
          justifyContent="center"
        >
          <img src={brandLogo4} alt="Logo 1" style={{ objectFit: "contain" }} />
        </Box>
      </Center>
    </Flex>
  );
};

export default Client;
