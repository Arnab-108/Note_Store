import React, { useState } from 'react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Center,
    Checkbox,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useToast,
} from "@chakra-ui/react";
import { Signup } from './Signup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const toast = useToast()
    const [show, setShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleSignin=()=>{
        const obj={
            email,
            password
        }

        axios.post("http://localhost:8080/user/login",obj).then((res)=>{
            console.log(res)
            if(res.data.msg==="Logged in successfully!"){
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("userId" , res.data.user_id)
                localStorage.setItem("auth", true)
                toast({
                    title:"Loggin in successfully",
                    status:"success",
                    duration:2000,
                    isClosable:true,
                    position:"top-right"
                })
                setTimeout(()=>{
                    navigate("/inside")
                },2000)
            }
            else if(res.data.msg==="Incorrct Password!"){
                toast({
                    title:"Incorrect Password!",
                    status:"error",
                    duration:2000,
                    isClosable:true,
                    position:"top-right"
                })
            }
            else if(res.data.err==="User dosen't exists. Please Signup!"){
                toast({
                    title:"User dosen't exists. Please Signup!",
                    status:"error",
                    duration:2000,
                    isClosable:true,
                    position:"top-right"
                })
            }
        })
        .catch((err)=>{
            toast({
                title:`Something went wrong! ${err}`,
                status:"error",
                duration:2000,
                isClosable:true,
                position:"top-right"
            })
        })
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <Center onClick={handleOpen} color={"#2c3338"} as={'a'} fontSize={'sm'} fontWeight={400}>
                Sign In
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
                        <Image
                            src="https://simplenoteblog.files.wordpress.com/2020/07/simplenote_hero.png?w=1200"
                            alt="pic"
                            borderRadius={"10px 10px 0px 0px "}
                        />
                        <Box m={"34px 45px 50px 45px"}>
                            <Heading
                                fontFamily={" Times, serif"}
                                fontWeight="100"
                                fontSize={"28px"}
                                mb="24px"
                                color={"#333368"}
                            >
                                Sign In
                            </Heading>
                            <Input
                                name="email"
                                placeholder="Email"
                                value={email}
                                h={"50px"}
                                fontSize="16px"
                                focusBorderColor="rgb(206, 206, 223)"
                                borderColor={"rgb(206, 206, 223)"}
                                rounded="2xl"
                                mb={"5px"}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            <InputGroup>
                                <Input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter password"
                                    value={password}
                                    h={"50px"}
                                    fontSize="16px"
                                    focusBorderColor="rgb(206, 206, 223)"
                                    borderColor={"rgb(206, 206, 223)"}
                                    rounded="2xl"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />

                                <InputRightElement width="6.5rem" size="lg">
                                    <Button
                                        size="md"
                                        borderRadius="3xl"
                                        mt="10%"
                                        onClick={() => setShow(!show)}
                                        bg="white"
                                    >
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Box

                                m="15px 0px 0px 0px"
                                color="#000042"
                                fontSize="15px"
                            >
                                Forget Password ?
                            </Box>
                            <HStack fontSize="16px">
                                <Checkbox mb={"20px"} mt="20px" size="sm">
                                    Get Update on whatsapp
                                </Checkbox>
                                <Image
                                    src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                                    w={"22px"}
                                    h="22px"
                                />
                            </HStack>
                            <Button
                                //isLoading={loading}
                                onClick={handleSignin}
                                bgColor={"blue.500"}
                                width="100%"
                                color={"white"}
                                borderRadius={"35px/35px"}
                                h="50px"
                                fontSize="18px"
                                _hover={{ backgroundColor: "blue.500" }}
                            >
                                Sign In
                                {/* <ToastContainer /> */}
                            </Button>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
    )
}
