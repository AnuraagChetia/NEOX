import {
  AbsoluteCenter,
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../Assets/Logo3.png";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import slider2 from "../../Assets/slide2.png";
import "./header.css";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };
  return (
    <Box className="header" h={{ xl: "49vh" }} display="block">
      <VStack>
        <Flex
          gap={{ base: 10, sm: 150, md: 400, lg: 100, xl: 10 }}
          mt={{ base: 10, md: 10, "2xl": 20 }}
          minWidth="max-content"
        >
          <Image boxSize="40px" src={logo} alt="Maharashtra Logo" w="250px" />
          <HStack
            gap="10"
            ml={{ xl: 300, "2xl": 800 }}
            display={{ base: "none", lg: "flex" }}
          >
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Service</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
          </HStack>

          <Box>
            <HamburgerIcon
              display={{ base: "block", lg: "none" }}
              boxSize="30px"
              onClick={() => handleClick()}
              m={1}
            />
            <Drawer onClose={onClose} isOpen={isOpen} size="xs">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{`drawer contents`}</DrawerHeader>
                <DrawerBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consequat nisl vel pretium lectus quam id. Semper
                    quis lectus nulla at volutpat diam ut venenatis. Dolor morbi
                    non arcu risus quis varius quam quisque. Massa ultricies mi
                    quis hendrerit dolor magna eget est lorem. Erat imperdiet
                    sed euismod nisi porta. Lectus vestibulum mattis ullamcorper
                    velit.
                  </p>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Flex>
        <Flex mx={{ base: 0, md: 10 }} mt={{ sm: 10, md: 0, "2xl": 20 }}>
          <Center>
            <Stack direction={{ base: "column", lg: "row" }}>
              <VStack
                px={{ base: 10, md: 0, "2xl": 20 }}
                pt={{ base: 10, md: 20 }}
              >
                <Heading as="h1" size={{ base: "lg", md: "xl" }}>
                  Building Dreams, Crafting Realities: Your Vision, Our
                  Expertise.
                </Heading>
                <Heading as="h3" size={{ base: "xs", md: "md" }}>
                  Welcome to Maharashtra Ltd., Where Quality Meets Precision in
                  Every Brick and Beam."
                </Heading>
              </VStack>
              <Center>
                <Image
                  boxSize={{ base: 300, "2xl": 450 }}
                  mt={{ md: 10, lg: 0 }}
                  w={{ base: 400, md: 600, lg: 800, "2xl": 900 }}
                  src={slider2}
                  alt="sliderImage"
                />
              </Center>
            </Stack>
          </Center>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Header;
