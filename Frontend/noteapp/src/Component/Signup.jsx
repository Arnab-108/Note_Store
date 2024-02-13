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

export const Signup = () => {
    const toast = useToast()
    const [show, setShow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const navigate = useNavigate()

    const handleRegister = ()=>{
        const obj={
            email,
            password,
            name,
            age
        }

        axios.post("http://localhost:8080/user/signup",obj).then((res)=>{
            console.log(res)
            if(res.data.msg==="User registered successfully"){
                toast({
                    title:"User successfully registered!",
                    description:"Please login to access the features that we provide.",
                    status:"success",
                    duration:4000,
                    isClosable:true,
                    position: "top-right"
                })
            }
            else if(res.data.msg==="User already exists. Please login!"){
                toast({
                    title:"User already exists!",
                    description:"Please login first!",
                    status:"warning",
                    duration:4000,
                    isClosable:true,
                    position:"top-right"
                })
            }
            setAge("")
            setEmail("")
            setName("")
            setPassword("")
            setTimeout(()=>{
                navigate("/")
            },1000)
        })
        .catch((err)=>{
            toast({
                title:"Something went wrong",
                description:"Please Try Again!",
                status:"error",
                duration:4000,
                isClosable:true,
                position:"top-right"
            })
        })
    }
    return (
        <>
            <Button as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={"transparent"}
                _hover={{
                    bg: 'transparent'
                }}
                width={'100%'}
                onClick={onOpen}>Sign up</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box m={"5px 45px 20px 45px"}>
                            <Heading
                                fontFamily={" Times, serif"}
                                fontWeight="100"
                                fontSize={"26px"}
                                mb="20px"
                                color={"#333368"}
                            >
                                Create an Account
                            </Heading>

                            <Input
                                type="text"
                                fontSize="16px"
                                value={name}
                                focusBorderColor="rgb(206, 206, 223)"
                                name="name"
                                placeholder="Enter Your Full Name*"
                                h={"45px"}
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 15px 0px"}
                                rounded="2xl"
                                onChange={(e)=>setName(e.target.value)}
                            />


                            <Input

                                fontSize="16px"
                                name="email"
                                value={email}
                                placeholder="Email*"
                                h={"45px"}
                                focusBorderColor="rgb(206, 206, 223)"
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 18px 0px"}
                                rounded="2xl"
                                onChange={(e)=>setEmail(e.target.value)}
                            />


                            <InputGroup mb="15px">
                                <Input
                                    fontSize="16px"
                                    type={show ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    placeholder="Password*"
                                    h={"45px"}
                                    focusBorderColor="rgb(206, 206, 223)"
                                    borderColor={"rgb(206, 206, 223)"}
                                    m={"8px 0px 8px 0px"}
                                    rounded="2xl"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />

                                <InputRightElement width="6.5rem" size="lg">
                                    <Button
                                        size="md"
                                        borderRadius="3xl"
                                        mt="20%"
                                        onClick={() => setShow(!show)}
                                        bg="white"
                                    >
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Input

                                fontSize="16px"
                                name="number"
                                placeholder="Age"
                                value={age}
                                h={"45px"}
                                focusBorderColor="rgb(206, 206, 223)"
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 18px 0px"}
                                rounded="2xl"
                                onChange={(e)=>setAge(e.target.value)}
                            />

                            <HStack>
                                <Box
                                    textDecoration={"underline"}
                                    fontFamily={" sans-serif"}
                                    color={"#333368"}
                                    fontSize="14px"
                                >
                                    Got a Referral code?
                                </Box>

                                <Box fontFamily={" sans-serif"} color={"#333368"}>
                                    (Optional)
                                </Box>
                            </HStack>

                            <HStack>
                                <Checkbox
                                    mb={"20px"}
                                    mt="20px"
                                    size="sm"
                                    fontFamily={" sans-serif"}
                                >
                                    Get Update on whatsapp
                                </Checkbox>
                                <Image
                                    src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                                    w={"22px"}
                                    h="22px"
                                />
                            </HStack>

                            <HStack spacing={"3px"} mb="10px">
                                <Box
                                    fontSize={"14px"}
                                    fontFamily={" sans-serif"}
                                    fontWeight="100"
                                    letterSpacing={"-0.4px"}
                                >
                                    By creating this account, you agree to our
                                </Box>
                                <Box fontSize={"15px"} textDecoration="underline">
                                    Privacy Policy
                                </Box>
                            </HStack>

                            <Button
                                //   isLoading={loading}
                                onClick={handleRegister}
                                bgColor={"blue.500"}
                                width="100%"
                                color={'white'}
                                borderRadius={"35px/35px"}
                                h="50px"
                                _hover={{ backgroundColor: "blue.500" }}
                                fontFamily={" sans-serif"}
                                fontWeight="300"
                                fontSize="18px"
                            >
                                Create an Account
                            </Button>

                            <Center mt={"14px"} fontSize="15px" gap="2">
                                Have an account?{" "}
                                <Center fontWeight={"500"} textDecoration="underline">
                                    Sign In
                                </Center>
                            </Center>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
