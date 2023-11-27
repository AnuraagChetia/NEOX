import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./contactus.css";
import { ChatIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const [nameInput, setNameInput] = useState(" ");
  const [emailInput, setEmailInput] = useState(" ");
  const [phoneInput, setPhoneInput] = useState(" ");
  const [requirementInput, setRequireMentInput] = useState(" ");

  const toast = useToast();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!nameInput || !emailInput || !phoneInput || !requirementInput) {
      alert("Please fill up all the fields");
    }
    const formData = {
      from_name: "Maharashtra Ltd.",
      to_name: nameInput,
      to_email: emailInput,
    };
    try {
      await emailjs.send(
        "service_2zflenj",
        "template_9x3jjce",
        formData,
        "0Y3C5DnkfdIL_gaNH"
      );
      toast({
        title: "Email Sent!",
        description: "We will contact you soon",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-rightF",
      });
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to submit form",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Center w="100%" px={{ xl: 20 }} className="contact-us">
      <Flex direction={{ base: "column", md: "row" }} gap="10" mt="10">
        <Box
          w={{ base: "", md: "80%", xl: "50%" }}
          // border="1px"
          // borderColor="#ff5722"
          p="5"
          m="5"
          borderRadius="5%"
        >
          <Heading textAlign="center" w="100">
            Contact Us
          </Heading>
          <Text
            mt={{ base: "10", md: 10 }}
            textAlign="center"
            px="8"
            fontWeight="400"
            color="#565656"
          >
            Thank you for your interest in Maharashtra Ltd. We value the
            opportunity to connect with you. Whether you have inquiries about
            our services, want to discuss potential collaborations, or simply
            have questions, we are here to assist you.
          </Text>
          <Text mt={{ base: "10", md: 20 }} textAlign="" px="8">
            <Text>
              <span style={{ fontWeight: 600 }}>Corporate Headquarters:</span>
              Na-Ali Kamalaboria, Jorhat, Assam
            </Text>
            <Text>
              <span style={{ fontWeight: 600 }}>Phone:</span>
              9365631300
            </Text>
            <Text>
              <span style={{ fontWeight: 600 }}>Email:</span>
              anuraagchetia77@gmail.com
            </Text>
            <Text>
              <span style={{ fontWeight: 600 }}>Business Hours:</span>
              Monday - Friday: 9:00 AM - 5:00 PM Saturday - Sunday: Closed
            </Text>
          </Text>
        </Box>
        <Flex
          direction={"column"}
          w={{ base: "", md: "100%", xl: "50%" }}
          mt={{ base: 0, md: "10%", xl: "7%" }}
        >
          <Center px="8">
            <FormControl>
              <FormControl isInvalid={!nameInput}>
                <FormLabel>Name</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <ChatIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => {
                      setNameInput(e.target.value);
                    }}
                  />
                </InputGroup>
                {nameInput ? (
                  <FormHelperText>Enter the your name</FormHelperText>
                ) : (
                  <FormErrorMessage>Name is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!emailInput}>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <EmailIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                    }}
                  />
                </InputGroup>
                {emailInput ? (
                  <FormHelperText>Enter your email</FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!phoneInput}>
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    onChange={(e) => {
                      setPhoneInput(e.target.value);
                    }}
                  />
                </InputGroup>
                {phoneInput ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage>Phone number is required.</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={!requirementInput}>
                <FormLabel>Requirement</FormLabel>
                <Input
                  h="40"
                  type="text"
                  onChange={(e) => {
                    setRequireMentInput(e.target.value);
                  }}
                />
                {!requirementInput ? (
                  <FormHelperText>
                    Enter your requirement or queries
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Requirement is required.</FormErrorMessage>
                )}
              </FormControl>
            </FormControl>
          </Center>
          <Button
            mx={20}
            borderRadius={20}
            mt={{ base: 4, xl: 8 }}
            colorScheme="teal"
            onClick={formSubmitHandler}
            // isLoading={props.isSubmitting}
            type="button"
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ContactUs;
