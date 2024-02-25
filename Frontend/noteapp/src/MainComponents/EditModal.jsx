import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
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
import { editUser } from '../Redux/UserRedux/action';

export const EditModal = () => {
    const id = localStorage.getItem("userId")
    const [data, setData] = useState("")
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((store) => store.userReducer.user)
    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const file = files ? files[0] : null; // Get file if exists
        setData((prev) => ({ ...prev, [name]: file || value })); // Update data state
    }

    const handleSubmit = () => {
        const formData = new FormData();
        // Append each key-value pair to formData
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });
        console.log(formData,"form")
        // Dispatch editUser action with formData
        dispatch(editUser(formData, id)).then(() => {
            alert("User Edited!");
            setIsOpen(false)
            navigate("/userProfile")
            // Handle navigation or other actions upon successful edit
        });


        //setData("")
    }
    useEffect(() => {
        const data = user?.find((el) => el._id === id)
        setData(data)
    }, [user, id])
    console.log(user, "user")
    console.log(data, "data")
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
                                        value={data?.name}
                                        h={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                        onChange={handleChange}
                                    />
                                </InputGroup>

                                <InputGroup mt={"2vh"} mb={"2vh"}>
                                    <InputLeftAddon height={"7.25vh"}>
                                        Email
                                    </InputLeftAddon>
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        value={data?.email}
                                        height={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                        onChange={handleChange}
                                    />
                                </InputGroup>

                                <InputGroup mt={"2vh"} mb={"2vh"}>
                                    <InputLeftAddon height={"7.25vh"}>
                                        +91
                                    </InputLeftAddon>
                                    <Input
                                        name="phone"
                                        placeholder="Phone"
                                        type='number'
                                        value={data?.phone}
                                        h={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                                <InputGroup mt={"2vh"} mb={"2vh"}>
                                    <InputLeftAddon height={"7.25vh"}>
                                        Age
                                    </InputLeftAddon>
                                    <Input
                                        name="age"
                                        placeholder="Age"
                                        value={data?.age}
                                        h={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                                <InputGroup mt={"2vh"} mb={"2vh"}>
                                    <InputLeftAddon height={"7.25vh"}>
                                        Upload
                                    </InputLeftAddon>
                                    <Input
                                        name="avatar"
                                        type='file'
                                        accept=".jpg, .jpeg, .png"
                                        placeholder='Upload Image'
                                        height={"3vh"}
                                        h={"50px"}
                                        fontSize="16px"
                                        focusBorderColor="rgb(206, 206, 223)"
                                        borderColor={"rgb(206, 206, 223)"}
                                        rounded="2xl"
                                        mb={"5px"}
                                        paddingTop={"10px"}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </Box>
                            <Button
                                //isLoading={loading}
                                onClick={handleSubmit}
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
