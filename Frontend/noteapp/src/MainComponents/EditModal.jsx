import React, { useState } from 'react'
import axios from "axios"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import {
    Center,
    Heading,
    HStack,
    InputGroup,
    InputLeftAddon,
    useDisclosure,
    Image,
    Box,
    Input,
    Checkbox,
    InputRightElement,
    Text,
    Link,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';

export const EditModal = () => {
    const [show, setShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <>
            <Center onClick={handleOpen} color={"#2c3338"} as={'a'} fontSize={'sm'} fontWeight={400}>
                EDIT
            </Center>

            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                isCentered
                size={{ xl: "md", lg: "md", md: "md", sm: "sm", base: "sm" }}
            >
                <ModalOverlay />
                <ModalContent rounded="3xl">
                    <ModalCloseButton
                        borderRadius={"50%"}
                        bg="white"
                        m={"10px 10px 0px 0px"}
                    />

                    <ModalBody p={"0px 0px "} borderRadius={"15px 15px 15px 15px "}>
                        {/* <Image
                            src="https://simplenoteblog.files.wordpress.com/2020/07/simplenote_hero.png?w=1200"
                            alt="pic"
                            borderRadius={"10px 10px 0px 0px "}
                        /> */}
                        <Box m={"34px 45px 50px 45px"}>
                            <Heading
                                fontFamily={" Times, serif"}
                                fontWeight="100"
                                fontSize={"28px"}
                                mb="24px"
                                color={"#333368"}
                            >
                                Edit User
                            </Heading>
                            <Box mt={"6vh"}>

                                <InputGroup mt={"2vh"} mb={"2vh"}>
                                    <InputLeftAddon height={"7.25vh"}>
                                        Name
                                    </InputLeftAddon>
                                    <Input
                                        name="name"
                                        placeholder="Name"
                                        //value={email}
                                        h={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                    //onChange={(e) => setEmail(e.target.value)}
                                    />
                                </InputGroup>

                                <InputGroup mt={"2vh"} mb={"2vh"}>
                                    <InputLeftAddon height={"7.25vh"}>
                                        Email
                                    </InputLeftAddon>
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        //value={email}
                                        h={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                    //onChange={(e) => setEmail(e.target.value)}
                                    />
                                </InputGroup>

                                <InputGroup mt={"2vh"} mb={"2vh"}>
                                    <InputLeftAddon height={"7.25vh"}>
                                        +91
                                    </InputLeftAddon>
                                    <Input
                                        name="phone"
                                        placeholder="Phone"
                                        type='tel'
                                        //value={email}
                                        h={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                    //onChange={(e) => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                                <InputGroup mt={"2vh"} mb={"2vh"}>
                                    <InputLeftAddon height={"7.25vh"}>
                                        Age
                                    </InputLeftAddon>
                                    <Input
                                        name="age"
                                        placeholder="Age"
                                        //value={email}
                                        h={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                    //onChange={(e) => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                                <InputGroup mt={"2vh"} mb={"2vh"}>
                                    <InputLeftAddon height={"7.25vh"}>
                                        Upload
                                    </InputLeftAddon>
                                    <Input
                                        name="avatar"
                                        type='file'
                                        placeholder='Upload Image'
                                        //value={email}
                                        height={"3vh"}
                                        h={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                        paddingTop={"10px"}
                                    //onChange={(e) => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                            </Box>
                            <Button
                                //isLoading={loading}
                                //onClick={handleSignin}
                                bgColor={"blue.500"}
                                width="100%"
                                color={"white"}
                                borderRadius={"35px/35px"}
                                h="50px"
                                fontSize="18px"
                                _hover={{ backgroundColor: "blue.500" }}
                                pos={"relative"}
                                top={"4vh"}
                            >
                                Edit
                                {/* <ToastContainer /> */}
                            </Button>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
    )
}
