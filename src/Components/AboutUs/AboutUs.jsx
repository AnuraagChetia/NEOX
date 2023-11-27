import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import image from "../../Assets/AboutUs/1.png";
import image2 from "../../Assets/AboutUs/2.png";
import image3 from "../../Assets/AboutUs/3.png";
import image4 from "../../Assets/AboutUs/4.png";
import "./aboutus.css";
const AboutUs = () => {
  return (
    <Flex
      direction="column"
      p="4"
      className="about-us"
      mx={{ base: 0, md: 40 }}
    >
      <Heading size="2xl" my="8" textAlign="center">
        About us
      </Heading>
      <Text fontSize="lg" fontWeight={{ base: 400, md: 600 }}>
        Welcome to Maharashtra Ltd, a leading construction company committed to
        excellence, innovation, and the seamless realization of visionary
        projects. With a rich history rooted in integrity and a forward-looking
        approach, we take pride in our contributions to the development of
        robust infrastructure across diverse sectors.
      </Text>
      <Center>
        <Image boxSize={{ base: "", sm: "400" }} src={image} />
      </Center>
      <Heading size="xl" my="8" textAlign="center">
        Our Vision
      </Heading>
      <Text fontSize="lg" fontWeight={{ base: 400, md: 600 }}>
        At Maharashtra Ltd, our vision is to be a cornerstone in the growth and
        progress of the nation's infrastructure. We aspire to set new benchmarks
        in construction, engineering, and project management, creating lasting
        value for our clients and communities.
      </Text>
      <Heading size="xl" my="4" textAlign="center">
        What Sets Us Apart
      </Heading>
      {/* Cards */}
      <Center>
        <Flex direction={{ base: "column", md: "row" }} gap="10" mt="10">
          <>
            <Card maxW="sm">
              <CardBody>
                <Image src={image2} alt="Lock" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Innovation</Heading>
                  <Text>
                    We embrace cutting-edge technologies and construction
                    methodologies to deliver projects that stand the test of
                    time. Our commitment to innovation ensures that we stay at
                    the forefront of industry trends.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image src={image3} alt="Lock" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Quality Assurance</Heading>
                  <Text>
                    We adhere to the highest standards of quality at every phase
                    of a project. Our rigorous quality assurance processes
                    guarantee that our clients receive construction solutions
                    that exceed expectations.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image src={image4} alt="Lock" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Client-Centric Approach</Heading>
                  <Text>
                    Understanding the unique needs of our clients is at the core
                    of our philosophy. We work collaboratively to tailor
                    solutions that align with their goals, timelines, and
                    budgets.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </>
        </Flex>
      </Center>
    </Flex>
  );
};

export default AboutUs;
