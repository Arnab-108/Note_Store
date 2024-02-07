import React, { useState } from 'react'
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
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const Signup = () => {
    const [show, setShow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={"transparent"}
                href={'#'}
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

                                focusBorderColor="rgb(206, 206, 223)"
                                name="name"
                                placeholder="Enter Your Full Name*"
                                h={"45px"}
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 15px 0px"}
                                rounded="2xl"

                            />


                            <Input

                                fontSize="16px"
                                name="email"
                                placeholder="Email*"
                                h={"45px"}
                                focusBorderColor="rgb(206, 206, 223)"
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 18px 0px"}
                                rounded="2xl"

                            />


                            <InputGroup mb="15px">
                                <Input
                                    fontSize="16px"
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="Password*"
                                    h={"45px"}
                                    focusBorderColor="rgb(206, 206, 223)"
                                    borderColor={"rgb(206, 206, 223)"}
                                    m={"8px 0px 8px 0px"}
                                    rounded="2xl"
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
                                h={"45px"}
                                focusBorderColor="rgb(206, 206, 223)"
                                borderColor={"rgb(206, 206, 223)"}
                                m={"8px 0px 18px 0px"}
                                rounded="2xl"

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
