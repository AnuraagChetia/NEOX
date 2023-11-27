import React from "react";
import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import image from "../../Assets/Projects/groupchat.png";
import image2 from "../../Assets/Projects/expenseTracker.jpg";
import image3 from "../../Assets/Projects/chatbot.jpg";
import image4 from "../../Assets/Projects/mailbox.jpg";
import image5 from "../../Assets/Projects/ecom.jpg";
const Project = () => {
  return (
    <Center mx="10">
      <Box direction="column">
        <Flex direction="column" gap="6" mt="10">
          <Heading textAlign="center">Projects</Heading>
          <Heading textAlign="center">Check our projects</Heading>
        </Flex>
        <Flex
          overflowX="auto"
          direction={{ base: "column", md: "row" }}
          gap="0"
          mt="10"
        >
          <>
            <Card maxW="sm" flexShrink={0}>
              <CardBody>
                <Image
                  w="400"
                  h="250"
                  src={image}
                  alt="Lock"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Group chat application</Heading>
                  <Text fontSize="sm" color="#787272">
                    MongoDb, Express, React, Nodejs, Socket.io, Chakra UI
                  </Text>
                  <Text>
                    Built a group chat application where users can users can log
                    in and chat with other users in real time
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" flexShrink={0}>
              <CardBody>
                <Image
                  w="400"
                  h="250"
                  src={image2}
                  alt="Lock"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Expense Tracker</Heading>
                  <Text fontSize="sm" color="#787272">
                    React.Js , Redux , Node Js, Express , AWS S3 , MySQL.
                  </Text>
                  <Text>
                    Built an app that track a user's expenses with
                    authentication and Razorpay integration that allows paid
                    users to have access to premium features.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" flexShrink={0}>
              <CardBody>
                <Image
                  w="400"
                  h="250"
                  src={image3}
                  alt="Lock"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md"> Grogu - The Jedi Chat Bot</Heading>
                  <Text fontSize="sm" color="#787272">
                    React,Javascript,Axios
                  </Text>
                  <Text>
                    Built a google chrome extension that shows on your YouTube
                    page and makes you able to chat with an AI at any time
                    without having to move to another tab.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" flexShrink={0}>
              <CardBody>
                <Image
                  w="400"
                  h="250"
                  src={image4}
                  alt="Lock"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Mailbox Client</Heading>
                  <Text fontSize="sm" color="#787272">
                    React.Js , Redux , Bootstrap, Firebase Authentication,
                    Firebase Realtime Database
                  </Text>
                  <Text>
                    Built a mail website that allows users to send mails to
                    other users.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" flexShrink={0}>
              <CardBody>
                <Image
                  w="400"
                  h="250"
                  src={image5}
                  alt="Lock"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">E-Commerce Website</Heading>
                  <Text fontSize="sm" color="#787272">
                    React.Js , Context , Bootstrap, Firebase Authentication,
                    Firebase Realtime Database
                  </Text>
                  <Text>
                    Built an e-commerce website using React.Js, Bootstrap CSS,
                    Material UI , Firebase and CrudCrud
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </>
        </Flex>
      </Box>
    </Center>
  );
};

export default Project;
