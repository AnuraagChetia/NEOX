import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import image from "../../Assets/Services/1.png";
import image2 from "../../Assets/Services/2.png";
import image3 from "../../Assets/Services/3.png";
import image4 from "../../Assets/Services/4.png";
const Service = () => {
  return (
    <Center mx="10">
      <Flex direction="column">
        <Flex direction="column" gap="6" mt="10">
          <Heading textAlign="center">Services</Heading>
          <Heading textAlign="center">Check our services</Heading>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} gap="10" mt="10">
          <>
            <Card maxW="sm">
              <CardBody>
                <Image src={image} alt="Lock" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Commercial Construction</Heading>
                  <Text>
                    From office complexes to retail spaces, we bring commercial
                    visions to life with precision and efficiency.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image src={image2} alt="Lock" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Residential Development</Heading>
                  <Text>
                    Creating homes that blend functionality, aesthetics, and
                    modern living for communities to thrive.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image src={image3} alt="Lock" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Infrastructure Projects</Heading>
                  <Text>
                    Our expertise extends to infrastructure development,
                    including roads, bridges, and utility systems, vital for the
                    progress of regions and cities.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image src={image4} alt="Lock" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Industrial Facilities</Heading>
                  <Text>
                    Designing and constructing robust industrial facilities that
                    optimize operations and foster growth.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Service;
