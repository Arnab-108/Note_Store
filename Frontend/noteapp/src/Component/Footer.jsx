import { Box, Button, Center, Divider, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
    return (
        <>
            <Box width={"100%"} align={"center"} height={"8vh"} >
                <Stack
                    flex={{ base: 1, md: 0 }}
                    // pos={"relative"}
                    // right={"7vw"}
                    align={"center"}
                    justify={'center'}
                    direction={'row'}
                    spacing={10}>
                    <HStack
                        spacing='24px'
                    // pos={"relative"}
                    // right={"1vw"}

                    >
                        <Box w='5vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                                Contacts Us
                            </Text>
                        </Box>
                        <Box w='5vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                                Help
                            </Text>
                        </Box>
                        <Box w='5vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                                Blog
                            </Text>
                        </Box>
                        <Box w='5vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                                Developers
                            </Text>
                        </Box>
                        <Box w='5vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                                Teams
                            </Text>
                        </Box>
                        <Box w='8vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                                Terms & Conditions
                            </Text>
                        </Box>
                        <Box w='6vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                                Privecy
                            </Text>
                        </Box>
                        <Box w='14vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                            Privacy Notice for California Users
                            </Text>
                        </Box>
                    </HStack>

                    <Center height={"50px"}>
                        <Divider color={"black"} orientation='vertical' />
                    </Center>
                    <Box w='6vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                        <Text align={"center"} fontSize={"14px"}>
                            © Automattic
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
